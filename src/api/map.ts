import { get } from 'https';

export function getJson(url: string): Promise<object> {
  return new Promise((resolve, reject) => {
    const req = get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.headers['content-type'] !== 'application/json') {
          reject(data);
          return;
        }
        resolve(JSON.parse(data));
      });
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

export default {};
