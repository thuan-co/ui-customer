// @flow
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import SelectAddress from '../../components/address/selected';
import { CheckOut } from '../../components/order/Checkout';
import { OrderItem } from '../../components/order/data';
import Payment from '../../components/payment/payment';
import { orderPhoneActions } from '../../features/redux-saga/Order/orderSlice';
import { AddressDto, CustomerDto, ItemDto, OrderDto } from '../../model/other';
import { customHistory } from '../../router/CustomRouter';

export default function Order() {

    const dispatch = useAppDispatch()

    const [customer, setCustomer] = useState<CustomerDto>(
        {
            id: '',
            email: sessionStorage.getItem('email'),
            fullName: sessionStorage.getItem('name'),
            phoneNumber: '',
        }
    )
    
    const [address, setAddress] = useState<AddressDto>(
        {
            cityId: '',
            districtId: '',
            communeId: '',
            details: '',
        }
    ) 

    const stateBack = customHistory.location.state as OrderItem

    useEffect(()=>{
        
        const avt = sessionStorage.getItem('avt')
        if (avt !== null){
            stateBack.avt = avt
        }
        
    })

    const [orderItem, setOrderItem] = useState<OrderItem>(stateBack)

    const handleConfirmOrder = () => {

        // list items
        let item:ItemDto = {

            name: orderItem.name,
            deviceId: orderItem.deviceId,
            optionId: orderItem.optionId,
            quantity: orderItem.quantity,
            totalPrice: orderItem.totalPrice,
        }
        let items:ItemDto[] = [item]

        let req:OrderDto = {
            id: '',
            createAt: new Date(),
            totalPrice: orderItem.totalPrice,
            status: "Chờ xác nhận",
            customer: customer,
            items: items,
            address: address
        } 

        dispatch(orderPhoneActions.makeOrder(req))
    }

    const handleChangeOrderItem = (obj:OrderItem, name:string, value:string) => {
        setOrderItem({...obj, [name]:value})
    }

    const handleChangeAddress = (located:AddressDto, name:string, value:any) => {
        setAddress({...located, [name]:value})
    }   


    return (
        <section className='max-w-screen-xl mx-auto'>

            <div className='grid grid-cols-[_65%_35%]'>

                {/* get data from cart or immediate product page */}
                <CheckOut value={orderItem} updatedFunc={handleChangeOrderItem} />
                
                {/* Todo: This is need updated logic business */}
                <Payment />
            </div>

            <div id="address-order">
                <SelectAddress located={address} updatedFunc={handleChangeAddress} />
            </div>

            <div>
                <h3>Xác nhận thông tin người nhận:</h3>
                <div id='email-customer-order'>
                    Email: <span>{customer.email}</span>
                </div>
                <div id='fullname-customer-order'>
                    Họ và tên: <span>{customer.fullName}</span>
                </div>
                <div id='phone-customer-order' className='mt-2'>
                    <TextField label='Số điện thoại'
                    name='phoneNumber' 
                    value={customer.phoneNumber}
                    onChange={(event) => {
                        const {value, name} = event.target
                        setCustomer({...customer, [name]: value})
                    }}
                    />
                </div>
            </div>
            
            <div id="confirm-order" className='my-5'>
                <Button variant='contained' onClick={handleConfirmOrder}>Đặt hàng</Button>
            </div>
        </section>
    );
};