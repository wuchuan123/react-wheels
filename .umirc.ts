import { defineConfig } from 'dumi';

let BaseUrl = '/cent-react-wheels';

export default defineConfig({
  title: 'cent-react-wheel',
  favicon:
    'https://cdn.zaticdn.com/if/zaif-cps-seagull-service/20210520/camel_4344.png',
  logo:
    'https://cdn.zaticdn.com/if/zaif-cps-seagull-service/20210520/camel_4344.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  base: BaseUrl,
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入
});
