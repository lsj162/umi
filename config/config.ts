import { defineConfig } from 'umi';
import routes from './routes';

const yargs = require('yargs');
const argv = yargs.argv;

const env: any = {
  // 生产
  pro: {
    name: 'pro',
    // api代理
    api_host: 'https://api.xxx.com',
  },
  // 预发
  pre: {
    name: 'pre',
    // api代理
    api_host: 'https://api.xxx.com',
  },
  // 测试
  test: {
    name: 'test',
    // api代理
    api_host: 'https://api.xxx.com',
  },
  // 开发
  dev: {
    name: 'dev',
    // api代理
    api_host: 'https://api.xxx.com',
  },
};

// TODO: 删除 .umirc.ts，推荐两种配置方式二选一，.umirc.ts 优先级更高。
export default defineConfig({
  history: { type: 'browser' },
  targets: {
    ie: 9,
  },
  title: 'Title 必填项',
  routes: routes,
  hash: true,
  ssr: {},
  define: {
    UMI_ENV: { ...env[argv.env] },
  },
});
