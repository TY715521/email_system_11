export default [
  {
    path: '/main',
    name: 'main',
    component: () => import('./index.vue')
  },
  // 在现有路由中添加
{
  path: '/mail-detail',
  name: 'mailDetail',
  component: () => import('@/views/mailDetail/index.vue')
}
];    