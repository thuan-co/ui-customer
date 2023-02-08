import { useEffect, useState } from 'react';
import { OrderItem } from './data';

type Prop = {
    value: OrderItem,
    updatedFunc: (obj: OrderItem, name:string, value:any) => void,

}

export function CheckOut(props: Prop) {

    // const [order, setOrder] = useState<OrderItem>(props)

    const formatPrice = (price:string) => {
        let result:string = ''
        let n = price.length
        let _i = 1;
        for(let _x = n - 1; _x >= 0;) {
            
            if (_i <= 3) {
                result = result.concat(price[_x])
                _i++
                _x--
                continue
            }
            result = result.concat('.')
            _i = 1
        }
        let n1 = result.length
        let strPrice = ''
        for(let _x = n1 - 1; _x >= 0; _x--) {
            strPrice = strPrice.concat(result[_x])
        }
        return strPrice
    }

    useEffect(() => {
        // console.log("Số lượng sản phẩm: ", order.quantity)
        // calculates price of item
        let priceNum = parseInt(props.value.price);
        priceNum *= props.value.quantity
        // setOrder({...order, 'totalPrice': priceNum.toString()})
        props.updatedFunc(props.value, 'totalPrice', priceNum.toString())

    }, [props.value.quantity])

    return (
        <div className='gird row-auto w-full'>
            <div className='flex w-full items-center bg-yellow-50 justify-between h-[123px] py-5 pr-3'>
                {/* product information */}
                <div className='flex flex-row float-right items-center'>
                    <img className='w-[110px] object-contain' src={props.value.avt} alt="anh san pham"/>
                    <div>
                        <span>{props.value.name}</span>
                    </div>
                </div>

                {/* quantity product */}
                <div className="flex absolute translate-x-[-280px] left-[50%] items-center gap-1 bg-gray-100">
                    <button
                        type="button"
                        onClick={() => {
                            if (props.value.quantity === 0) {}
                            if (props.value.quantity > 0) {
                                props.updatedFunc(props.value, 'quantity', props.value.quantity - 1)
                            }
                        }}
                        className="w-10 h-10 leading-10 font-bold text-2xl transition hover:opacity-75"
                    >
                        -
                    </button>

                    <input
                        type="text"
                        disabled
                        id="Quantity"
                        value={props.value.quantity}
                        name='quantity'
                        onChange={(event) => { 
                            const {value, name} = event.target
                            if (parseInt(value) >= 0 ) {
                                props.updatedFunc(props.value, name, value)}
                                
                            }
                        }
                        className="w-10 h-10 bg-gray-100 border-[#dbcccc] rounded sm:text-sm"
                    />

                    <button
                        type="button"
                        className="w-10 h-10 leading-10 font-bold text-2xl transition hover:opacity-75"
                        onClick={()=> {

                            props.updatedFunc(props.value, 'quantity', props.value.quantity + 1)
                        }}
                    >
                        +
                    </button>
                </div>

                {/* product price */}
                <div>
                    <span id={"price-"+props.value.deviceId}>{formatPrice(props.value.totalPrice)}₫</span>
                </div>
            </div>

            {/* <div className='float-right pr-3'>
                <span>Tổng tiền: 20000₫</span>
            </div> */}
        </div>
    );
};