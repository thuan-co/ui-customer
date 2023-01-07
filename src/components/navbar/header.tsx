// import { Link } from 'react-router-dom'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Badge, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import '../../index.css';
import { useState } from 'react';

function LoginDropDown() {
    return(
        <div className='nav-user-login transition-all'>
            <ul>
                <li className='mb-2'>
                    <a href='/' className="flex flex-row p-2 relative justify-center text-sm hover:bg-slate-200">
                        <span>Đăng nhập</span>
                    </a>
                </li>
                <li>
                    <a href='/' className="flex flex-row p-2 relative justify-center text-sm hover:bg-slate-200">
                        <span>Đăng ký</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

function MangaAccDropDown() {

    return(
        <div className='px-3 py-1 w-[12rem] nav-user-login'>
            <ul className='flex flex-col '>
                <li className='my-3'>
                    <span>Cài đặt tài khoản</span>
                </li>
                <li className='mb-3'>
                    <span>Điều khoản và dịch vụ</span>
                </li>
                <li className='mb-3'>
                    <span>Đăng xuất</span>
                </li>
            </ul>
        </div>
    )
}

export default function Header() {

    const [isAuth, setIsAuth] = useState<Boolean | null>(true)

    const [isClick, setIsClick] = useState<Boolean | null>(false)

    return (
        <div className="theme-tet-header-left theme-tet-header-right h-16 flex flex-row justify-between items-center max-w-screen-xl mx-auto">

            <div id='header-right-content' className='flex flex-row items-center'>
                <p>
                    <a href='/' className='text-2xl font-mono mr-8'>SHOPTECH</a>
                </p>

                <Box component="form" className='relative max-w-2xl bg-slate-200 rounded-md flex items-center'>
                    <input type='text' id='input-search-product' placeholder='Bạn đang tìm gì...' 
                        className='border-0 px-2 py-1 placeholder:italic focus:outline-none rounded-md shadow-sm'
                    />
                    <button className='absolute bg-transparent right-0 justify-center'>
                        <SearchSharpIcon/>
                    </button>
                </Box>
            </div>

            <div id='header-middle-content' className=''>

                <a href='/' id='btn-stores' className='bg-amber-500 px-2 py-1 rounded-sm'>
                    <StorefrontOutlinedIcon />
                    <span className='text-xs'>Cửa hàng</span>
                </a>

                <a href='/' id='btn-history-order' className='bg-amber-500 px-2 py-1 rounded-sm mx-6'>
                    <span className='text-xs text-center'>
                        Lịch sử đơn hàng
                    </span>
                </a>

                <a href='/' id='btn-cart' className='bg-amber-500 px-2 py-1 rounded-sm mr-6'>
                    
                    <Badge color="secondary" badgeContent={0}>

                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    <span className='text-xs text-center'>Giỏ hàng</span>
                </a>
            </div>

            <div id="header-right-content" className='flex flex-row items-center'>

                <a href='/' className='w-2/3 text-center bg-amber-500 px-2 py-1 rounded-sm mr-6'>
                    <span className='text-sm'>24h Công nghệ</span>
                </a>

                <div className='relative text-sm h-full select-none'>
                    <div className='flex flex-row items-center gap-x-4 cursor-pointer' onClick={()=> {
                        setIsClick(!isClick)
                    }}>
                        <Avatar sx={{ width: 30, height: 30 }} alt='account-avt' src=''></Avatar>
                        <span className='text-sm w-20'>Tài khoản</span>
                    </div>
                    {(isClick) ?
                        <div className='absolute min-w-full z-10 mt-2 bg-neutral-50 drop-shadow-xl'>
                            {(isAuth) ? <MangaAccDropDown /> : <LoginDropDown />}
                        </div>
                        : null
                    }

                </div>
                
            </div>
            
        </div>
    )
}