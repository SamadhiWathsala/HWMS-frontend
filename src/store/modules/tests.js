import axios from 'axios'


const base_URI = "https://mysterious-oasis-62350.herokuapp.com";



const state = {
    tests: [],
}

const getters = {

}
const actions = {


    //add new test for patient
    async addNewTest({ commit }, test) {
        const response = await axios.post(`${base_URI}/tests`, test, { headers: { authorization: localStorage.getItem('token') } })

        commit('addTest', response.data)
    },


}


const mutations = {
    addTest: (state, test) => state.tests.push(test),
}

export default ({
    state,
    getters,
    mutations,
    actions
})
