import { Address, AddressInit } from './Address'

export interface Counter {
    id: number
    type: number
    refnumber: string
    description?: string
    installationDate: number | null
    _links?: {
        self: {
            href: string
        },
        counter: {
            href: string
        }
    }
    address: Address
    status: number // desativado(0) -> ativado(1) -> ligado(2) -> suspenso(3) 
}

export interface Reading {
    id: number
    date: number | null
    value: number
}

export interface CounterHal {
    _embedded: {
        counters: Counter[]
    }
}

/** Initialisations */
export const counterInit: Counter = {
    id: 0,
    type: 0,
    refnumber: '',
    description: '',
    installationDate: 0,
    address: AddressInit,
    status: 0
}

export const readingInit: Reading = {
    id: 0,
    date: 0,
    value: 0
}

export const STATUSES: string[] = [
    'Desativado',
    'Ativado',
    'Ligado',
    'Suspenso'
]