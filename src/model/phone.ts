
export interface PhoneView {
    id: string
    name: string
    price: string
    avt:string
}

export interface Option {
    id: string
    price: string
    storage: string
}

export interface Component {
    id: string
    name: string
    features: string
}
export interface PhoneViewDetails {
    id: string
    name: string
    price: string
    dimensionImage: string
    slides: string[]
    storages: Option[]
    specs: Component[]
}

export const fakePhoneCard:PhoneView[] = [
    {
        id: '',
        name: 'Xiaomi 11 Lite 5G NE',
        price: '7.490.000',
        avt: 'https://cdn.tgdd.vn/Products/Images/42/249427/TimerThumb/xiaomi-11-lite-5g-ne-(20).jpg',
    },
    {
        id: '',
        name: 'Xiaomi 11 Lite 5G NE',
        price: '7.490.000',
        avt: 'https://cdn.tgdd.vn/Products/Images/42/249427/TimerThumb/xiaomi-11-lite-5g-ne-(20).jpg',
    },
    {
        id: '',
        name: 'Samsung Galaxy S20 FE',
        price: '9.490.000',
        avt: 'https://cdn.tgdd.vn/Products/Images/42/224859/TimerThumb/224859-1.jpg',
    },
    {
        id: '',
        name: 'Samsung Galaxy A23 6GB',
        price: '4.890.000',
        avt: 'https://cdn.tgdd.vn/Products/Images/42/274359/TimerThumb/samsung-galaxy-a23-6gb-(12).jpg',
    },
    {
        id: '',
        name: 'Samsung Galaxy A23 6GB',
        price: '4.890.000',
        avt: 'https://cdn.tgdd.vn/Products/Images/42/274359/TimerThumb/samsung-galaxy-a23-6gb-(12).jpg',
    },
    {
        id: '',
        name: 'Samsung Galaxy A23 6GB',
        price: '4.890.000',
        avt: 'https://cdn.tgdd.vn/Products/Images/42/274359/TimerThumb/samsung-galaxy-a23-6gb-(12).jpg',
    },
]