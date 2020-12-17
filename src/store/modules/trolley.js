import axios from 'axios'

const base_URI = "https://mysterious-oasis-62350.herokuapp.com";


const state = {
    items: []
}

const getters = {
    itemList: (state) => state.items,
}

const actions = {

    //fetch all items from the emergency trolley
    async fetcItems({ commit }) {
        const response = await axios.get(`${base_URI}/trolley`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setItems', response.data)
    },


    //add new item to the trolley
    async addItem({ commit }, item) {
        const response = await axios.post(`${base_URI}/trolley`, item, { headers: { authorization: localStorage.getItem('token') } })

        commit('addItem', response.data)
    }
}

const mutations = {
    setItems: (state, setItems) => state.items = setItems,
    addItem: (state, addItem) => state.items.push(addItem)
}


export default ({
    state,
    getters,
    mutations,
    actions,
})