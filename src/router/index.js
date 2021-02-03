import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home'),
    meta: { title: '主页' }
  },
  { 
    path: '/login',
    name: 'Login',
    component: () => import('../views/login'),
    meta: { title: '登录' }
  },
  {
    path: '/upload-food',
    name: 'UploadFood',
    component: () => import('../views/uploadFood'),
    meta: { title: '上传菜品' }
  },
  { 
    path: 'addFoodMenu',
    name: 'AddFoodMenu',
    component: () => import('../views/addFoodMenu'),
    meta: { title: '添加菜谱' }
  },
  { 
    path: '/order',
    name: 'Order',
    component: () => import('../views/order'),
    meta: { title: '点餐' }
  },
  { 
    path: '/consumption-report', 
    name: 'ConsumptionReport',
    component: () => import('../views/consumptionReport'),
    meta: { title: '消费报表' }
  }
]

const router = new VueRouter({
  routes
})

export default router
