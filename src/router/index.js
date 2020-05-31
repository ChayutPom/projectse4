import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Message from '../views/Message';
import Profile from '../views/Profile';
import Schedule from '../views/Schedule';
import app2 from '../views/app2.vue';
import photo from '../views/function/photo.vue';
import model from '../views/function/model.vue';
import review from '../views/function/review.vue';
import shop from '../views/function/shop.vue';
import Modeling from '../views/function/Modeling.vue';
import photographer from '../views/function/photographer.vue';
import profile from '../views/photo/profile.vue';
import achievement from '../views/photo/achievement.vue';
import profilemodel from '../views/model/profilemodel.vue';
Vue.use(VueRouter)

  const routes = [
  {
    
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/app2.vue',
      name: 'app2',
      component: app2
    },
    {
      path: '/photo.vue',
      name: 'photo',
      component: photo
    },
    {
      path: '/model.vue',
      name: 'model',
      component: model
    },
    {
      path: '/review.vue',
      name: 'review',
      component: review
    },

    {
      path: '/shop.vue',
      name: 'shop',
      component: shop
    },
    {
      path: '/Modeling.vue',
      name: 'Modeling',
      component: Modeling
    },

    {
      path: '/photographer.vue',
      name: 'photographer',
      component: photographer
    },
    {
      path: '/profile.vue',
      name: 'profile',
      component: profile
    },
    {
      path: '/achievement.vue',
      name: 'achievement',
      component: achievement
    },
    {
      path: '/profilemodel.vue',
      name: 'profilemodel',
      component: profilemodel
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
