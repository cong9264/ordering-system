import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home'),
        meta: { title: '主页' }
      }
    ]
  },
  { 
    path: '/login',
    name: 'Login',
    component: () => import('../views/login'),
    meta: { title: '登录' }
  },
  {
    path: '/food',
    name: 'Food',
    component: Layout,
    redirect: '/food/see-food',
    meta: { title: '菜品' },
    children: [
      {
        path: 'see-food',
        component: () => import('../views/seeFood'),
        meta: { title: '查看菜品' }
      },
      {
        path: 'add-food',
        component: () => import('../views/addFood'),
        meta: { title: '添加菜品' },
      }
    ],
  },
  { 
    path: '/food-menu',
    name: 'FoodMenu',
    component: Layout,
    redirect: '/food-menu/see-food-menu',
    children: [
      { 
        path: 'see-food-menu', 
        name: 'SeeFoodMenu',
        component: () => import('../views/seeFoodMenu'),
        meta: { title: '查看菜谱' } 
      },
      {
        path: 'addFoodMenu',
        name: 'AddFoodMenu',
        component: () => import('../views/addFoodMenu'),
        meta: { title: '添加菜谱' }
      },
    ] 
  },
  { 
    path: '/add-order',
    name: 'AddOrder',
    component: () => import('../views/addOrder'),
    meta: { title: '点餐' }
  },
  { 
    path: '/order-management', 
    name: 'OrderManagement',
    component: () => import('../views/orderManagement'),
    meta: { title: '订单管理' }
  },
  { 
    path: '/consumption-report', 
    name: 'ConsumptionReport',
    component: () => import('../views/consumptionReport'),
    meta: { title: '消费报表' }
  }
];



const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(!store.state.user.token && to.name !== 'Login') {
    next({ name: 'Login' });
  }
  next();
});

export default router
