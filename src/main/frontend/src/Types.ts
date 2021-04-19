import { Address, AddressInit } from './types/Address'

export const NIF: string = 'nif'
export const NIPC: string = 'nipc'

export interface Name {
    firstname: string
    lastname: string
}

export interface User {
    username: string
    jobTitle?: string
    avatar?: string
    role?: string
}

export interface Employee {
    fullname: string
    role: string
    address: Address
    email: string
    telephone: string
}

export interface Consumer {
    id: number
    address: Address
    birthdate: number
    isActive: boolean
    tax: Tax
    fullname: string
    email: string
    telephone: string
    reference: string
}

export interface CounterType {
    type: number
}

interface Tax {
    type: string
    identifier: string
}

export interface IData {
    value: number
    name: string
}
/** ServerData */


export const consumerDefault: Consumer = {
    id: 0,
    address: {
        city: '',
        country: '',
        street: '',
        district: undefined,
        number: undefined,
        zipcode: undefined
    },
    birthdate: 0,
    email: '',
    isActive: false,
    fullname: '',
    tax: {
        identifier: '',
        type: ''
    },
    telephone: '',
    reference: ''
}