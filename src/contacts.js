import axios from "axios";

const baseUrl = 'http://localhost:3005/persons'

const getAll = () => {
    return axios.get(baseUrl)
    .then(res => res.data)
}

const createContact = (newObject) => {
    return axios.post(baseUrl, newObject)
    .then(res => res.data)
}

const deleteContact = (obj) => {
    return axios.delete(`${baseUrl}/${obj}`)
    .then(res => res.data)
}

export default { getAll, createContact, deleteContact}