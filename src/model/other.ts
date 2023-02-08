
export interface City {
    id: string,
    name: string;
}

export interface District {
    id: string,
    cityId: string,
    name: string,
}

export interface Commune {
    id: string,
    districtId: string,
    name: string,
}

export interface AddressDto {
    cityId: string,
    districtId: string,
    communeId: string,
    details: string,
}

export interface CustomerDto {
    id: string,
    email: string | null,
    fullName: string | null,
    phoneNumber: string,
}

export interface ItemDto {
    name: string, 
    deviceId: string,
    optionId: string,
    quantity: number,
    totalPrice: string,
}

export interface OrderDto {
    id: string
    createAt: Date 
    totalPrice: string
    status: string
    customer: CustomerDto | null
    items: ItemDto[]
    address: AddressDto | null
}