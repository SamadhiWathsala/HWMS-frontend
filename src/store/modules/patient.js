import axios from 'axios'


const base_URI = "https://mysterious-oasis-62350.herokuapp.com";



const state = {
    patients: [],
    myPatients: [],
    patient: {}
}

const getters = {
    patientList: (state) => state.patients,
    hoPatientList: (state) => state.myPatients,
    singlePatient: (state) => state.patient,
}
const actions = {

    //fetch patients list
    async fetchPatients({ commit }) {
        const response = await axios.get(`${base_URI}/patients`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setPatients', response.data)
    },

    //fetch one patient from the database
    async fetchOnePatient({ commit }, patientID) {
        const response = await axios.get(`${base_URI}/patients/${patientID}`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setPatient', response.data)
    },

    //add new user to the system
    async addNewPatient({ commit }, patient) {
        const response = await axios.post(`${base_URI}/patients/admit`, patient, { headers: { authorization: localStorage.getItem('token') } })

        commit('addUser', response.data)
    },

    async fetchMyPatients({ commit }) {

        const response = await axios.get(`${base_URI}/patients/myPatients/${JSON.parse(atob(localStorage.getItem("token").split(".")[1]))
            ._id}`, { headers: { authorization: localStorage.getItem('token') } })

        commit('setHOPatients', response.data)
    }

}


const mutations = {
    setPatients: (state, setPatients) => state.patients = setPatients,
    setHOPatients: (state, setHOPatients) => state.myPatients = setHOPatients,
    setPatient: (state, setPatient) => state.patient = setPatient

}

export default ({
    state,
    getters,
    mutations,
    actions
})
