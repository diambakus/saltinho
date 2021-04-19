export interface Address {
    street: string
    number?: string
    zipcode?: string
    city: string
    country: string
    district?: string
    description?: string
}

export const AddressInit: Address = {
    street: '',
    number: '',
    zipcode: '',
    city: '',
    country: 'Guiné-Bissau',
    district: '',
    description: ''
}