export default {
  port: process.env.port || 7081,
  // rootDir: process.env.rootDir || '/opt/map',
  rootDir:
    process.env.rootDir || 'D:/workspace/Graduation/test/map-proxy/public/map',
  mapPrefixUrl: 'https://geo.datav.aliyun.com/areas_v3/bound/',
  split: '_',
};
