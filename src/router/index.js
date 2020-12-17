import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueJwtDecode from 'vue-jwt-decode'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../Home.vue')
  },
  {
    path: '/myPatients',
    name: 'medicalExamin',
    component: () => import('../views/MedicalExamin.vue')
  },
  {
    path: '/admission',
    name: 'admission',
    component: () => import('../views/Admission.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'HO') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'Admin') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/ward',
    name: 'Ward',
    component: () => import('../views/Ward.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'HO') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'HO') {
        next()
      } else {
        next('/')
      }
    }

  },
  {
    path: '/patientExamin/:pID',
    name: 'patientExamin',
    component: () => import('../views/PatientExamin.vue')
  },
  {
    path: '/patient/:pID',
    name: 'patient',
    component: () => import('../views/Patient.vue')
  },
  {
    path: '/userManage',
    name: 'userManage',
    component: () => import('../views/UserManage.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'Admin') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../views/Staff.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'HO') {
        next()
      } else {
        next('/')
      }
    }

  },
  {
    path: '/trolley',
    name: 'trolley',
    component: () => import('../views/Trolley.vue'),
    beforeEnter(to, from, next) {

      var tokenUser = JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userRole;

      if (tokenUser == 'HO' || tokenUser == 'Admin') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
