// import { Link } from 'react-router-dom'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Badge, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import '../../index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { authActions } from '../../features/redux-saga/Auth/AuthSlice';
import { customHistory } from '../../router/CustomRouter';

function LoginDropDown() {
    return(
        <div className='nav-user-login transition-all'>
            <ul>
                <li className='mb-2'>
                    <Link to='/login' className="flex flex-row p-2 relative justify-center text-sm hover:bg-slate-200">
                        <span>Đăng nhập</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="flex flex-row p-2 relative justify-center text-sm hover:bg-slate-200">
                        <span>Đăng ký</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

function MangaAccDropDown() {

    const dispatch = useAppDispatch()

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
                    <button onClick={()=>{
                        console.log("Log out account")
                        dispatch(authActions.logout())
                    }}>Đăng xuất</button>
                </li>
            </ul>
        </div>
    )
}

export default function Header() {

    // const [isAuth, setIsAuth] = useState<Boolean | null>(false)
    const selector = useAppSelector((state:RootState)=>state.auth)

    const name = sessionStorage.getItem('name');
    let isAuth:boolean = false
    let fullName:string[] = []
    let lastName:string | undefined

    if (name !== null && name !== undefined) {
        isAuth = true
        fullName = name.split(' ')
        lastName = fullName.at(fullName.length - 1)
    }

    const handleClickOrderHistory = () => {
        const isLogIn = Boolean(sessionStorage.getItem('email'))

        if (!isLogIn) {
            customHistory.push('/lichsu')
            customHistory.push("/login")
        }
        else {
            customHistory.push("/lichsu")
        }
    }

    const [isClick, setIsClick] = useState<Boolean | null>(false)

    return (
        <div className="theme-tet-header-left theme-tet-header-right h-16 flex flex-row justify-between items-center max-w-screen-xl mx-auto">

            <div id='header-right-content' className='flex flex-row items-center'>
                <p>
                    <Link to='/' className='text-2xl font-mono mr-8'>SHOPTECH</Link>
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

                <span onClick={handleClickOrderHistory} id='btn-history-order' className='bg-amber-500 px-2 py-1 rounded-sm mx-6 cursor-pointer'>
                    <span className='text-xs text-center'>
                        Lịch sử đơn hàng
                    </span>
                </span>

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
                        <span className='text-sm w-20'>
                                {isAuth ? lastName :
                            'Tài khoản'}
                        </span>
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