import axios from 'axios'


const base_URI = "https://mysterious-oasis-62350.herokuapp.com";



const state = {

    accounts: [],
}

const getters = {

    requestList: (state) => state.accounts

}
const actions = {
    //fetch all account requests
    async fetchAccRequests({ commit }) {

        const response = await axios.get(`${base_URI}/accRqst`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setRequests', response.data);

    },

    //Delete one of the account from accounts
    async deleteAccRequest({ commit }, id) {

        await axios.delete(`${base_URI}/accRqst/${id}`, { headers: { authorization: localStorage.getItem('token') } })

        commit('removeRequest', id)

    }
    //request a new account
}


const mutations = {
    setRequests: (state, requestList) => (state.accounts = requestList),
    removeRequest: (state, id) => state.accounts = state.accounts.filter(request => request._id !== id)
}


export default ({
    state,
    getters,
    mutations,
    actions
})
