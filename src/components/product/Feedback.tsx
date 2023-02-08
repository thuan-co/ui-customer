import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Link } from 'react-router-dom';

const feebackImg:string[] = [
    'https://cdn.tgdd.vn/comment/52587901/received_197621412256807973R6T.jpeg',
    'https://cdn.tgdd.vn/comment/52404824/image0XST2.jpg',
    'https://cdn.tgdd.vn/comment/52404824/imageEDIS6.jpg',
    'https://cdn.tgdd.vn/comment/52493215/image-20220911131743.jpg',
    'https://cdn.tgdd.vn/comment/52490696/imageWQBBE.jpg',
    'https://cdn.tgdd.vn/comment/52490696/image0MPVT.jpg',
    'https://cdn.tgdd.vn/comment/52490696/imageTBUIU.jpg'
]

type rating = {
    number: number,
    rate: number,
}

const listRating:rating[] = [
    {
        number: 5,
        rate: 55,
    },
    {
        number: 4,
        rate: 35,
    },
    {
        number: 3,
        rate: 5,
    },
    {
        number: 2,
        rate: 3,
    },
    {
        number: 1,
        rate: 2,
    },
]
export default function Feedback() {

    return (
        <div id="feedback-customer-product" className="box-border relative block bg-[#fff] font-bold text-xl rounded-md border-[#3a36364d] border-solid border-[1px] pb-3 px-4">
            <p className="py-2">Đánh giá</p>

            <div id="feedback" className='relative mt-3 flex flex-row'>

                <div id='feedback-left' className='relative inline-block w-[38.2%] border-r border-[#5a555567] border-solid'>

                    <div id='top-feedback' className='relative flex flex-row w-fit h-fit items-center px-4 -mt-3'>

                        <p className='text-yellow-400'>4.4</p>

                        <div id='rating-start' className='flex items-center'>
                            
                            <StarIcon className='text-yellow-400'/>
                            <StarIcon className='text-yellow-400'/>
                            <StarIcon className='text-yellow-400'/>
                            <StarIcon className='text-yellow-400'/>
                            <StarBorderOutlinedIcon className='text-yellow-400'/>
                        </div>
                        {/* Số lượng đánh giá - number of feedbacks */}
                        <Link className='text-base inline-block font-sans font-light hover:text-blue-400 hover:underline' to='/danhgia'>
                            <p>45 đánh giá</p>
                        </Link>
                        
                    </div>

                    <div id='ratings'>
                        <ul className='font-light text-base mx-3 mt-2'>

                            {
                                listRating.map((value, index) => (
                                    <li key={index} className='flex flex-row items-center'>
                                        <div className='flex flex-row items-center w-[25px]'>{value.number}          
                                            <StarIcon fontSize='small' className='text-yellow-400'/></div>
                                        <div className='w-[calc(100%_-_60px)] relative h-1 bg-[#ebe2e2] mx-3'>
                                            <div className='h-full bg-yellow-400' style={{width: `${value.rate}%`}}></div>
                                        </div>
                                        <p className='w-[35px]'>{value.rate}%</p>
                                </li>
                                ))
                            }
                            
                            
                        </ul>
                    </div>
                </div>
                
                <div id="feedback-right" className='ml-4 w-auto  border-none relative'>
                    <div className='relative inline-block'>
                        <ul className='flex flex-wrap flex-row relative justify-start items-center'>
                        {
                        feebackImg.map((value, index) => (

                            (index <= 9) ? 
                            <li key={index} className='relative pl-2 pb-[6px]'>
                                <img src={value} alt="" className='w-[72px] h-[72px] object-cover rounded-md'/>
                                {(index === feebackImg.length - 1) ? <p className='text-xs bg-[#2c2a2a71] text-slate-50 absolute w-[72px] h-[72px] top-0 rounded-md flex justify-center items-center hover:cursor-pointer'>Xem thêm</p> :
                                    null
                                }
                            </li> : null
                            
                        ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}