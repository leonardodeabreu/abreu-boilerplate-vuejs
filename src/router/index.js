import Vue from 'vue';
import Router from 'vue-router';

import Users from '@/app/Users/config/router';
import Profiles from '@/modules/registers/profiles/config/router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    Users,
    Profiles,
  ],
});

router.beforeEach((to, from, next) => {
  /** do something */
  return next();
});

export default router;
