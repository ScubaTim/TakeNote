import axios from 'axios'
const baseUrl = 'https://arcane-atoll-55268.herokuapp.com/notes'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = (newObject) => {
    const req = axios.post(baseUrl, newObject)
    return req.then(res => res.data)
}

const update = (newObject, id) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(res => res.data)
}

const remove = (id) => {
    const req = axios.delete(id)
    console.log('note removed')
    return req.then(res => res.status(204).end())
}

export default { getAll, create, update, remove }