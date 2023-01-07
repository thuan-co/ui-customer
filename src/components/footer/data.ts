
export interface About {
    name: string,
    link: string,
}

export interface Tel {
    name: string
    number: string
    shift: string
}

export const about:About[] = [
    {
        name: 'Lịch sử mua hàng',
        link: '/'
    }, 
    {
        name: 'Tìm hiểu về mua trả góp',
        link: '/'
    }, 
    {
        name: 'Chính sách bảo hành',
        link: '/'
    }, 
    {
        name: 'Chính sách đổi trả',
        link: '/'
    }, 
    {
        name: 'Giao hàng & Thanh toán',
        link: '/'
    }, 
]

export const intro:About[] = [
    {
        name: 'Giới thiệu công ty',
        link: '',
    },
    {
        name: 'Tuyển dụng',
        link: '',
    },
    {
        name: 'Gửi góp ý, khiếu nại',
        link: '',
    },
    {
        name: 'Xem cửa hàng',
        link: '',
    },
]

export const tel: Tel[] = [
    {
        name: 'Gọi mua',
        number: '1800.1060',
        shift: '7:30 - 22:00',
    },
    {
        name: 'Kỹ thuật',
        number: '1800.1763',
        shift: '7:30 - 22:00',
    },
    {
        name: 'Khiếu nại',
        number: '1800.1062',
        shift: '8:00 - 21:30',
    },
    {
        name: 'Bảo hành',
        number: '1800.1064 ',
        shift: '8:00 - 21:30',
    },
]