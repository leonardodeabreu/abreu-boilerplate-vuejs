const TheProfileRouter = () => import('@/app/Profile/TheProfile');
const TheProfileForm = () => import('@/app/Profile/components/TheProfileForm');
const ProfileList = () => import('@/app/Profile/components/ProfileList');

const ROUTE = '/profiles';
const ROUTE_CREATE = `${ROUTE}/create`;
const ROUTE_EDIT = `${ROUTE}/edit`;

export default {
  path: ROUTE,
  component: TheProfileRouter,
  meta: {
    auth: true,
  },
  children: [
    {
      path: '/',
      component: ProfileList,
      meta: {
        auth: true,
      },
    },
    {
      path: ROUTE_CREATE,
      component: TheProfileForm,
      meta: {
        auth: true,
      },
    },
    {
      path: `${ROUTE_EDIT}/:id`,
      component: TheProfileForm,
      meta: {
        auth: true,
      },
    },
  ],
};
