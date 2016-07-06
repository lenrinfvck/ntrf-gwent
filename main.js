/**
 * ntrf-gwent入口文件
 */

import Vue from 'vue';
import VueRouter from 'vueRouter';
import VueResource from 'vueResource';
import App from 'components/app.vue';
import Index from 'components/index.vue';
import Page_test from 'components/page_test.vue';

//注册插件
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

//路由配置
router.map({
    '/': {
        component: Index,
    },
    '/page': {
        component: Page_test,
    }
});

router.redirect({
    '*': '/'
});

router.start(App, '#app');