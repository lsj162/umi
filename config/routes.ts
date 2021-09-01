export default [
  {
    path: '/',
    component: '@/layouts/Headers/index',

    routes: [
      { exact: true, path: '/', component: 'index' },
      {
        path: '/home',
        component: '@/pages/home/index.tsx',
      },
      {
        component: '@/pages/404.tsx',
      },
    ],
  },
];
