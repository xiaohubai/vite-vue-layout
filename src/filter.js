import { storeToRefs } from 'pinia'
import router from '@/router'
import { useRouterStore } from '@/pinia/modules/router'
import { useSettingStore } from '@/pinia/modules/setting'
import { useUserStore } from '@/pinia/modules/user'
import getPageTitle from '@/utils/pageTitle'

let isRefresh = false

const useRouteStores = () => ({
  settingStore: useSettingStore(),
  routerStore: useRouterStore(),
  userStore: useUserStore()
});

router.beforeEach(async (to) => {
  document.title = getPageTitle(to.meta.title);
  const { settingStore, routerStore, userStore } = useRouteStores();
  const { defaultRouter } = storeToRefs(settingStore);
  const { token } = storeToRefs(userStore);

  to.meta.matched = [...to.matched];

  // 免登录路由处理
  if (to.meta?.requiresAuth === false) {
    return token.value ? { name: defaultRouter.value || 'login' } : true;
  }

  // 需要认证路由
  if (!token.value) {
    return { 
      name: 'login',
      query: { redirect: encodeURIComponent(to.fullPath) } 
    };
  }

  // 初始化动态路由
  if (!isRefresh) {
    isRefresh = true;
    await routerStore.getRouter();
    return { ...to, replace: true };
  }

  // 路由匹配检查
  return to.matched.length ? true : { path: '/404' };
});
