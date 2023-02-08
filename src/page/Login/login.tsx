// @flow
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import '../index.css'
import * as React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { LoginDto, authActions } from '../../features/redux-saga/Auth/AuthSlice';
;
export default function Login() {

    // variables
    const [showPassword, setShowPassword] = React.useState(false);

    const [login, setLogin] = React.useState<LoginDto>({
        username: '',
        password: '',
    })

    const dispatch = useAppDispatch()

    /**
     *  Dispatch action authorities information user inputted.
     * @returns null
     */
    const handleClickLogin = () => {
        
        dispatch(authActions.authorityAccount(login))
    }

    /**
     * Save info into state login
     * @param event get data from ele input
     */
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setLogin({...login, [name]:value})

    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Logo website
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                </p>

                <Box component='form' className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" id='login-container'>
                    <p className="text-lg font-medium">Đăng nhập vào tài khoản của bạn</p>

                    <div className='grid gap-y-5' id='main-content-login'>

                        <FormControl  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            variant="outlined">
                            <InputLabel htmlFor="customer-account">Tài khoản</InputLabel>
                            <OutlinedInput
                                id="customer-account"
                                name='username'
                                value={login.username}
                                onChange={onChangeInput}
                                label="Tài khoản"
                            />
                        </FormControl>

                        <FormControl  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            variant="outlined">
                            <InputLabel htmlFor="customer-password">Mật khẩu</InputLabel>
                            <OutlinedInput
                                id="customer-password"
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={login.password}
                                onChange={onChangeInput}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Mật khẩu"
                            />
                        </FormControl>
                    </div>

                    <Button
                        onClick={handleClickLogin}
                        variant='contained'
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Đăng nhập
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <a className="underline" href="/">Đăng ký</a>
                    </p>
                </Box>
            </div>
        </div>
    );
};  