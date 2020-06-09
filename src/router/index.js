import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase';

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
import productform from '../views/forms/productform.vue';
import reviewform from '../views/forms/reviewform.vue';

import addproduct from '../views/tabprofile/addproduct.vue';
import addreview from '../views/tabprofile/addreview.vue';
import Personal from '../views/tabprofile/Personal.vue';
import Point from '../views/tabprofile/Point.vue';

import detailreview from '../views/review/detailreview.vue';
import detailshop from '../views/shop/detailshop.vue';

import regis from '../views/regis.vue';
import login from '../views/login.vue';
Vue.use(VueRouter)
  const routes = [
  {
    
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { hideBack: true }

    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: { hideBack: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { hideBack: true }
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule,
      meta: { hideBack: true }
    },
    {
      path: '/app2.vue',
      name: 'app2',
      component: app2
    },
    {
      path: '/photo.vue',
      name: 'photo',
      component: photo,
      meta: { hideNavigation: true }
    },
    {
      path: '/model.vue',
      name: 'model',
      component: model,
      meta: { hideNavigation: true }
    },
    {
      path: '/review.vue',
      name: 'review',
      component: review,
      meta: { hideNavigation: true }
    },

    {
      path: '/shop.vue',
      name: 'shop',
      component: shop,
      meta: { hideNavigation: true }
    },
    {
      path: '/Modeling.vue',
      name: 'Modeling',
      component: Modeling,
      meta: { hideNavigation: true }
    },

    {
      path: '/photographer.vue',
      name: 'photographer',
      component: photographer,
      meta: { hideNavigation: true }
    },
    {
      path: '/profile.vue',
      name: 'profile',
      component: profile,
      meta: { hideNavigation: true }
    },
    {
      path: '/achievement.vue',
      name: 'achievement',
      component: achievement,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilemodel.vue',
      name: 'profilemodel',
      component: profilemodel,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo1.vue',
      name: 'photo1',
      component: photo1,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo2.vue',
      name: 'photo2',
      component: photo2,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo3.vue',
      name: 'photo3',
      component: photo3,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo4.vue',
      name: 'photo4',
      component: photo4,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo5.vue',
      name: 'photo5',
      component: photo5,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo6.vue',
      name: 'photo6',
      component: photo6,
      meta: { hideNavigation: true }
    },
    {
      path: '/photo7.vue',
      name: 'photo7',
      component: photo7,
      meta: { hideNavigation: true }
    },
    {
      path: '/addphotograf.vue',
      name: 'addphotograf',
      component: addphotograf,
      meta: { hideNavigation: true }
    },
    {
      path: '/addmodel.vue',
      name: 'addmodel',
      component: addmodel,
      meta: { hideNavigation: true }
    },
    {
      path: '/addproduct.vue',
      name: 'addproduct',
      component: addproduct,
      meta: { hideNavigation: true }
    },
    {
      path: '/addreview.vue',
      name: 'addreview',
      component: addreview,
      meta: { hideNavigation: true }
    },
    {
      path: '/Personal.vue',
      name: 'Personal',
      component: Personal,
      meta: { hideNavigation: true }
    },
    {
      path: '/Point.vue',
      name: 'Point',
      component: Point,
      meta: { hideNavigation: true }
    },
    {
      path: '/productform.vue',
      name: 'productform',
      component: productform,
      meta: { hideNavigation: true }
    },
    {
      path: '/reviewform.vue',
      name: 'reviewform',
      component: reviewform,
      meta: { hideNavigation: true }
    },
    {
      path: '/detailreview.vue',
      name: 'detailreview',
      component: detailreview,
      meta: { hideNavigation: true }
    },
    {
      path: '/detailshop.vue',
      name: 'detailshop',
      component: detailshop,
      meta: { hideNavigation: true }
    },
    {
      path: '/regis.vue',
      name: 'regis',
      component: regis,
      meta: { hideNavigation: true,
        hideBack: true },
   
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { hideNavigation: true,
        hideBack: true },
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
