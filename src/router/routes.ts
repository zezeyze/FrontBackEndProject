import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      {
        path: '',
        component: () => import('pages/CampaignPage.vue'),
      },
    ],
  },
  {
    path: '/Campaign/',
    component: () => import('layouts/MainLayout2.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/CampaignPage.vue'),
      },
    ],
  },
  {
    path: '/Gift/',
    component: () => import('layouts/MainLayout3.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/GiftPage.vue'),
      },
    ],
  },
  {
    path: '/SignIn/',
    component: () => import('layouts/MainLayout4.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/SignInPage.vue'),
      },
    ],
  },
  {
    path: '/Book/',
    component: () => import('layouts/MainLayout5.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/BookPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
