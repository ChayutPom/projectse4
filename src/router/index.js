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

import photo1 from '../views/forms/photo1.vue';
import photo2 from '../views/forms/photo2.vue';
import photo3 from '../views/forms/photo3.vue';
import photo4 from '../views/forms/photo4.vue';
import photo5 from '../views/forms/photo5.vue';
import photo6 from '../views/forms/photo6.vue';
import photo7 from '../views/forms/photo7.vue';

import addphotograf from '../views/forms/addphotograf.vue';
import addmodel from '../views/forms/addmodel.vue';

import addproduct from '../views/tabprofile/addproduct.vue';
import addreview from '../views/tabprofile/addreview.vue';
import Personal from '../views/tabprofile/Personal.vue';
import Point from '../views/tabprofile/Point.vue';

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
    {
      path: '/photo1.vue',
      name: 'photo1',
      component: photo1
    },
    {
      path: '/photo2.vue',
      name: 'photo2',
      component: photo2
    },
    {
      path: '/photo3.vue',
      name: 'photo3',
      component: photo3
    },
    {
      path: '/photo4.vue',
      name: 'photo4',
      component: photo4
    },
    {
      path: '/photo5.vue',
      name: 'photo5',
      component: photo5
    },
    {
      path: '/photo6.vue',
      name: 'photo6',
      component: photo6
    },
    {
      path: '/photo7.vue',
      name: 'photo7',
      component: photo7
    },
    {
      path: '/addphotograf.vue',
      name: 'addphotograf',
      component: addphotograf
    },
    {
      path: '/addmodel.vue',
      name: 'addmodel',
      component: addmodel
    },
    {
      path: '/addproduct.vue',
      name: 'addproduct',
      component: addproduct
    },
    {
      path: '/addreview.vue',
      name: 'addreview',
      component: addreview
    },
    {
      path: '/Personal.vue',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Point.vue',
      name: 'Point',
      component: Point
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
