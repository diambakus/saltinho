import axios from 'axios'

const BASE_QUERY = 'http://localhost:8086/api/'

export interface FieldError {
    key?: string
    field?: string
}

export const myAxios = axios.create({
    baseURL: BASE_QUERY,
})
