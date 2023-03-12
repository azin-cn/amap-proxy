import * as fs from 'fs';
import * as path from 'path';

/**
 *
 * @param {string} path
 * @return
 */
export function existsSync(path: string): boolean {
  return fs.existsSync(path);
}

/**
 * 读取路径信息
 * @param {string} path 路径
 */
export function getStat(
  path: string,
): Promise<{ isExists: boolean; stats: fs.Stats }> {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve({ isExists: false, stats });
      } else {
        resolve({ isExists: true, stats });
      }
    });
  });
}

/**
 * 创建路径
 * @param {string} dir 路径
 */
export function mkdir(dir): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

export async function makeDirs(
  dir: string,
): Promise<{ state: boolean; stats: fs.Stats }> {
  let { isExists, stats } = await getStat(dir);

  if (dir === path.parse(dir).root && !isExists) {
    throw new Error('error path');
  }

  if (isExists && stats.isDirectory()) {
    return { state: true, stats };
  } else if (isExists && stats.isFile()) {
    return { state: false, stats };
  }

  const parentDir = path.parse(dir).dir;
  const { state: pState, stats: pStats } = await makeDirs(parentDir);
  if (pState) {
    isExists = await mkdir(dir);
    stats = (await getStat(dir)).stats;
  }
  return { state: isExists, stats };
}

export default {};
