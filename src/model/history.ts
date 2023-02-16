
export interface HistoryItem {
    id: string,
    nameItem: string,
    quantity: number,
    price: string,
    time: string,
    status: string,
}

export interface ItemResponse {
    deviceId: string
    name: string
    quantity: number
    totalPrice: string
}

export interface OrderHistoryResponse {
    id: string
    itemsResponse: ItemResponse[]
    time: string
    status: string
}