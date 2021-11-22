import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(res => res.data)
    
}

const createOne = (personObj) => {
    const request = axios.post(baseURL, personObj)
    return request.then(res => res.data)
}

const update = (person) => {
    const request = axios.put(`${baseURL}/${person.id}`, person)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(res => res.data)
}


export default { getAll, createOne, remove, update }