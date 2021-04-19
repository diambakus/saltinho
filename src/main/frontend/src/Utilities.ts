import { MONTHS } from "./utils/Initials"
import { MONTHSExt } from './utils/CommonData'

export const toDateFormat = (dateLong: number | null): string => {
    if ((dateLong === null) || (dateLong === 0)) return "--"
    let date = new Date(dateLong)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export const monthInitials = (date: string): string => {
    let parts: string[] = date.split('/')
    const toNumber: number = Number(parts[1])
    return MONTHS[toNumber - 1]
}

export const getMonth = (date: string): string => {
    let parts: string[] = date.split('/')
    const toNumber: number = Number(parts[1])
    return MONTHSExt[toNumber - 1]
}

export const shallowCopy = <T>(myArray: T[]): T[] => {
    let myNewArray: T[] = []
    myArray.forEach(item => myNewArray.push(Object.assign({}, item)))
    return myArray
}