import axios from 'axios'


const base_URI = "https://mysterious-oasis-62350.herokuapp.com";



const state = {

    admissions: [],
}

const getters = {

    admissionList: (state) => state.admissions

}
const actions = {
    //fetch all admission requests
    async fetchAdmisions({ commit }) {

        const response = await axios.get(`${base_URI}/admission`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setAdmissions', response.data);

    },

    //Delete one of the admission from admissions
    async deleteAdmission({ commit }, id) {

        await axios.delete(`${base_URI}/admission/${id}`, { headers: { authorization: localStorage.getItem('token') } })

        commit('removeAdmission', id)

    },

}


const mutations = {
    setAdmissions: (state, admissionList) => state.admissions = admissionList,
    removeAdmission: (state, id) => state.admissions = state.admissions.filter(x => x._id !== id)
}


export default ({
    state,
    getters,
    mutations,
    actions
})
