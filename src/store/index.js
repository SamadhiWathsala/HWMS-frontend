import Vue from 'vue'
import Vuex from 'vuex'
import accRequests from './modules/reqAcc'
import users from './modules/user'
import admissions from './modules/admission'
import trolley from './modules/trolley'
import patient from './modules/patient'
import test from './modules/tests'
import treatment from './modules/treatments'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    accRequests,
    users,
    admissions,
    trolley,
    patient,
    test,
    treatment
  }
})
