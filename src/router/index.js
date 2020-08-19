import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase';

import Home from '../views/Home.vue';
import Message from '../views/Message';
import Profile from '../views/Profile';
import Schedule from '../views/Schedule';
import Schedule2 from '../views/Schedule2';
import app2 from '../views/app2.vue';
import test from '../views/test';
import PrivateChat from '../views/PrivateChat.vue';
import photo from '../views/function/photo.vue';
import model from '../views/function/model.vue';
import review from '../views/function/review.vue';
import shop from '../views/function/shop.vue';
import Modeling from '../views/function/Modeling.vue';
import photographer from '../views/function/photographer.vue';
import profilephoto from '../views/photo/profilephoto.vue';
import achievement from '../views/photo/achievement.vue';
import profilemodel from '../views/model/profilemodel.vue';
import formmodel from '../views/model/formmodel.vue';

import photo1 from '../views/forms/photo1.vue';
import photo2 from '../views/forms/photo2.vue';
import photo3 from '../views/forms/photo3.vue';
import photo4 from '../views/forms/photo4.vue';
import photo5 from '../views/forms/photo5.vue';
import photo6 from '../views/forms/photo6.vue';
import photo7 from '../views/forms/photo7.vue';

import tab1 from '../views/tabphotographer/tab1.vue';
import tab2 from '../views/tabphotographer/tab2.vue';
import tab3 from '../views/tabphotographer/tab3.vue';
import tab4 from '../views/tabphotographer/tab4.vue';
import tabmodel1 from '../views/model/tabmodel1.vue';
import tabmodel2 from '../views/model/tabmodel2.vue';

import type1 from '../views/formtype/type1.vue';
import type2 from '../views/formtype/type2.vue';
import type3 from '../views/formtype/type3.vue';
import type4 from '../views/formtype/type4.vue';
import type5 from '../views/formtype/type5.vue';
import type6 from '../views/formtype/type6.vue';
import type7 from '../views/formtype/type7.vue';

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

import selectPhoto from '../views/schedule/selectPhoto.vue';

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
      path: '/Schedule2',
      name: 'Schedule2',
      component: Schedule2,
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
      path: '/profilephoto/:key',
      name: 'profilephoto',
      component: profilephoto,
      props: true,
      meta: { hideNavigation: true }
    },
    {
      path: '/achievement.vue',
      name: 'achievement',
      component: achievement,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilemodel/:key',
      name: 'profilemodel',
      component: profilemodel,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo1.vue',
      name: 'photo1',
      component: photo1,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo2.vue',
      name: 'photo2',
      component: photo2,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo3.vue',
      name: 'photo3',
      component: photo3,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo4.vue',
      name: 'photo4',
      component: photo4,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo5.vue',
      name: 'photo5',
      component: photo5,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo6.vue',
      name: 'photo6',
      component: photo6,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilephoto/:key/photo7.vue',
      name: 'photo7',
      component: photo7,
      meta: { hideNavigation: true }
    },
    {
      path: '/profilemodel/:key/formmodel',
      name: 'formmodel',
      component: formmodel,
      meta: { hideNavigation: true }
    },
    {
      path: '/type1.vue',
      name: 'type1',
      component: type1,
      meta: { hideNavigation: true }
    },
    {
      path: '/type2.vue',
      name: 'type2',
      component: type2,
      meta: { hideNavigation: true }
    },
    {
      path: '/type3.vue',
      name: 'type3',
      component: type3,
      meta: { hideNavigation: true }
    },
    {
      path: '/type4.vue',
      name: 'type4',
      component: type4,
      meta: { hideNavigation: true }
    },
    {
      path: '/type5.vue',
      name: 'type5',
      component: type5,
      meta: { hideNavigation: true }
    },
    {
      path: '/type6.vue',
      name: 'type6',
      component: type6,
      meta: { hideNavigation: true }
    },
    {
      path: '/type7.vue',
      name: 'type7',
      component: type7,
      meta: { hideNavigation: true }
    },
    {
      path: '/tab1.vue',
      name: 'tab1',
      component: tab1,
      meta: { hideNavigation: true }
    },
    {
      path: '/tab2.vue',
      name: 'tab2',
      component: tab2,
      meta: { hideNavigation: true }
    },
    {
      path: '/tab3.vue',
      name: 'tab3',
      component: tab3,
      meta: { hideNavigation: true }
    },
    {
      path: '/tab4.vue',
      name: 'tab4',
      component: tab4,
      meta: { hideNavigation: true }
    },
    {
      path: '/tabmodel1',
      name: 'tabmodel1',
      component: tabmodel1,
      meta: { hideNavigation: true }
    },
    {
      path: '/tabmodel2',
      name: 'tabmodel2',
      component: tabmodel2,
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
      path: '/detailreview/:key',
      name: 'detailreview',
      component: detailreview,
      meta: { hideNavigation: true }
    },
    {
      path: '/detailshop/:key',
      name: 'detailshop',
      component: detailshop,
      meta: { hideNavigation: true }
    },
    {
      path: '/regis.vue',
      name: 'regis',
      component: regis,
      meta: { hideNavigation: true,
 },
   
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { hideNavigation: true,
        hideBack: true },
    },

    {
      path: '/test',
      name: 'test',
      component: test,
      meta: { hideNavigation: true,
        hideBack: true },
    },

    {
      path: '/selectPhoto',
      name: 'selectPhoto',
      component: selectPhoto,
      meta: { hideNavigation: true,
        hideBack: true },
    },

    {
      path: '/schedule/PrivateChat/:key',
      name: 'PrivateChat',
      component: PrivateChat,
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
