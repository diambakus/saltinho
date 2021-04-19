import { Consumer, consumerDefault } from '../Types'
import { Counter, counterInit } from './Counter'

export interface Contract {
    id: number
    creationDate: number | null
    consumer: Consumer
    counter: Counter
    status: number
    number: number
}

export const ContractInit: Contract = {
    id: 0,
    creationDate: (new Date()).getTime(),
    consumer: consumerDefault,
    counter: counterInit,
    status: -1,
    number: -1
}
