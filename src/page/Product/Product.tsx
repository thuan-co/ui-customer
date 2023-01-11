
import Slider from 'react-animated-slider-2'
import Policy from '../../components/product/Policy'
import { fakePolicyPhone } from './data'
import Feedback from '../../components/product/Feedback'
import { Button } from '@mui/material'
// import 'react-animated-slider-2/build/horizontal.css';

type Spec = {
    name:string,
    content:string
}

const fake:string[] = [
    'https://cdn.tgdd.vn/Products/Images/42/245545/Slider/iphone-14-plus-thumb-youtube-1020x570.jpg',
    'https://cdn.tgdd.vn/Products/Images/42/245545/Slider/iphone-14-plus638028259532774052.jpg',
    'https://cdn.tgdd.vn/Products/Images/42/245545/Slider/iphone-14-plus638028259534574048.jpg',
    'https://cdn.tgdd.vn/Products/Images/42/245545/Slider/iphone-14-plus638028259535623909.jpg',
]


const fakeSpec: Spec[] = [
    {
        name: "Màn hình",
        content: " Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED Chính 6.7\" & Phụ 1.9\" Full HD+ ",
    },
    {
        name: "Hệ điều hành",
        content: "Android 12",
    },
    {
        name: "Camera sau",
        content: "2 camera 12 MP",
    },
    {
        name: "Camera trước",
        content: "10 MP",
    },
    {
        name: "Chip",
        content: "Snapdragon 8+ Gen 1",
    },
    {
        name: "RAM",
        content: "8 GB",
    },
    {
        name: "Dung lượng lưu trữ",
        content: "128 GB",
    },
    {
        name: "Pin, Sạc",
        content: " 3700 mAh 25 W ",
    },
] 

export default function Product() {


    return (
        <section className="relative max-w-screen-xl w-full mx-auto grid grid-rows-2 my-20">

            <div className="absolute flex items-center border-solid border-b-2 w-full h-16 -top-20 bg-[#fff]">
                <div className='font-semibold text-2xl'>
                    <span>Samsung Galaxy Z Flip4 128GB</span>
                </div>
            </div>

            <div id="summary-device-left" className="grid bg-[#fff] grid-cols-[60%_40%] ">

                <div id="intro-device" className="relative w-full min-h-[422px]">
                    <div id="slider-images-container" className='relative h-auto max-w-full'>
                        <Slider autoplay={1000}>
                            {
                                fake.map((item, index) => (
                                    <img className='object-contain w-full select-none' key={index} src={item} alt='anh'/>
                                ))
                            }
                        </Slider>
                        
                        <div id='slider-images-control' className='relative h-20 bg-black'>
                            
                        </div>

                        <Policy />

                        <div id='image-dimension'>
                            <img className='object-contain my-2' src="https://cdn.tgdd.vn/Products/Images/42/218734/Kit/xiaomi-redmi-9a-note.jpg" alt="Ảnh kích thước" />
                        </div>
                        
                        <Feedback />
                    </div>
                </div>

                <div id="specifications-device" className="bg-blue-300 px-6">

                    <div id='option-container' className='w-full'>
                        
                        <div className="flow-root my-4">
                            <div className="-m-0.5 mb-4 flex flex-row flex-wrap">

                                <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                                    <input
                                        type="radio"
                                        name="color"
                                        id="color_tt"
                                        defaultChecked
                                        className="sr-only peer"
                                    />

                                    <span
                                        className="inline-block px-5 py-2 text-base border border-solid border-[#0566e6] group peer-checked:bg-[#0566e6] peer-checked:text-[#fff]"
                                    >
                                        Đen
                                    </span>
                                </label>

                                <label htmlFor="color_ttt" className="cursor-pointer p-0.5">
                                    <input
                                        type="radio"
                                        name="color"
                                        id="color_ttt"
                                        className="sr-only peer"
                                    />

                                    <span
                                        className="inline-block px-5 py-2 text-base border border-solid border-[#000] group peer-checked:bg-black peer-checked:text-white"
                                    >
                                        Tím
                                    </span>
                                </label>
                            </div>

                            <div className="-m-0.5 flex flex-row flex-wrap">

                                <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                                    <input
                                        type="radio"
                                        name="color"
                                        id="color_tt"
                                        className="sr-only peer"
                                    />

                                    <span
                                        className="inline-block px-5 py-2 text-base border border-solid border-[#000] group peer-checked:bg-black peer-checked:text-white"
                                    >
                                        125 GB
                                    </span>
                                </label>

                                <label htmlFor="color_ttt" className="cursor-pointer p-0.5">
                                    <input
                                        type="radio"
                                        name="color"
                                        id="color_ttt"
                                        className="sr-only peer"
                                    />

                                    <span
                                        className="inline-block px-5 py-2 text-base border border-solid border-[#000] group peer-checked:bg-black peer-checked:text-white"
                                    >
                                        256 GB
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    

                    <p className='text-[#eb5757] text-lg font-bold'>7.490.000₫</p>

                    <div className='mt-4 relative'>
                        <Button sx={{width: '100%', backgroundColor:'#ec7310fb', marginBottom:'10px'}} color='primary' variant='contained'>Mua ngay</Button>
                        <Button variant='contained' sx={{width: '100%'}} color='success'>Thêm vào giỏ hàng</Button>
                    </div>

                    <div className='font-semibold text-lg my-2'>
                        Cấu hình Điện thoại Samsung Galaxy Z Flip4 128GB
                    </div>

                    <div id="specifications" className='bg-[#fff] w-full relative'>  
                        <ul>
                        {
                            fakeSpec.map((value, index) => (
                                <li key={index} className='spec-product flex flex-row items-center w-full p-2'>
                                    <p className='w-[140px]'>{value.name}:</p>
                                    <div className='w-[calc(100%_-_140px)]'>
                                        <span>{value.content}</span>
                                    </div>
                                </li>
                            ))
                        }
                        </ul>

                        <span className='btn-detail-spec'>
                            <span className='btn-detail-spec-action relative'>
                                Xem cấu hình chi tiết
                            </span>
                        </span>
                    </div>

                </div>
            </div>
            
            {/* Phần bình luận - Comment */}
            <div className="bg-white">

            </div>
        </section>
    )
}