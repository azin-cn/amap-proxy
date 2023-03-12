import * as fs from 'fs/promises';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import config from './config/config';
import * as MapApi from './api/map';
import { existsSync } from './utils/file';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMapJson(): object {
    return {};
  }

  async getMapJsonWithCode(code: string, isFull = true): Promise<object> {
    const filename = `${code}${config.split}${isFull ? 'full' : ''}.json`; // 100000_full.json
    const filepath = path.join(config.rootDir, filename);
    console.log(new Date().toLocaleString(), filename);

    if (existsSync(filepath)) {
      const data = await fs.readFile(filepath);
      return JSON.parse(data.toString());
    }

    const fileHandle = await fs.open(filepath, 'w+');

    try {
      const url = `${config.mapPrefixUrl}${
        config.mapPrefixUrl.endsWith('/') ? '' : '/'
      }${filename}`;

      const data = await MapApi.getJson(url);
      await fileHandle.writeFile(JSON.stringify(data));
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      fileHandle.close();
    }
    return {};
  }
}
