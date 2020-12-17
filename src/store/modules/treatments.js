import axios from 'axios'


const base_URI = "https://mysterious-oasis-62350.herokuapp.com";



const state = {
    treatment: [],
}

const getters = {

}
const actions = {


    //add new test for patient
    async addNewTreatment({ commit }, treatment) {
        const response = await axios.post(`${base_URI}/treatment`, treatment, { headers: { authorization: localStorage.getItem('token') } })

        commit('addTreatment', response.data)
    },


}


const mutations = {
    addTreatment: (state, treatment) => state.treatment.push(treatment),
}

export default ({
    state,
    getters,
    mutations,
    actions
})
