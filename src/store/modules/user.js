import axios from 'axios'


const base_URI = "https://mysterious-oasis-62350.herokuapp.com";



const state = {
    users: [],

}

const getters = {

    userList: (state) => state.users,
    HOList: (state) => {
        return state.users.filter(x => x.userRole === "HO")
    },
    NurseList: (state) => {
        return state.users.filter(x => x.userRole === "Nurse")
    },
    AdminList: (state) => {
        return state.users.filter(x => x.userRole === "Admin")
    },

}
const actions = {

    //fetch all users of the system
    async fetchUsers({ commit }) {
        const response = await axios.get(`${base_URI}/auth/allUsers`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setUsers', response.data)
    },

    //add new user to the system
    async addNewUser({ commit }, user) {
        const response = await axios.post(`${base_URI}/auth/addUser`, user, { headers: { authorization: localStorage.getItem('token') } })

        commit('addUser', response.data)
    },

    //Delete one of the user from database
    // async deleteUser({ commit }, id) {

    //     await axios.delete(`${base_URI}/auth/${id}`, { headers: { authorization: localStorage.getItem('token') } })

    //     commit('deleteUser', id)

    // }

}


const mutations = {
    setUsers: (state, setUsers) => state.users = setUsers,
    addUser: (state, user) => state.users.push(user),
    // deleteUser: (state, id) => state.users = state.users.filter(x => x._id !== id)
}

export default ({
    state,
    getters,
    mutations,
    actions
})
