import { useEffect } from "react"
import { PhoneView } from "../../../model/phone"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { phoneCardActions } from "../../../features/redux-saga/PhoneView/PhoneCardSlice"
import { RootState } from "../../../app/store"
import PhoneCard from "../../product/PhoneCard"

export function OppoPromote() {

    const images = ['https://cdn.tgdd.vn/2023/02/banner/Sieu-saleDesk--1--380x200.jpg', 'https://cdn.tgdd.vn/2023/01/banner/Reno8-seriesDesk-380x200.png', 'https://cdn.tgdd.vn/2023/01/banner/Reno7-seriesDesk-380x200.png']
    // , 'https://cdn.tgdd.vn/2023/02/banner/Sieu-saleDesk-380x200.png', 'https://cdn.tgdd.vn/2023/01/banner/A57-seriesDesk-380x200.png', 'https://cdn.tgdd.vn/2023/02/banner/380-x-200-380x200.png']

    const promotePhones:PhoneView[] = useAppSelector((state:RootState)=>state.oppoPromote)

    const dispatch = useAppDispatch()

    useEffect(()=>{
        if (promotePhones.length === 0) {
            dispatch(phoneCardActions.fetchPromoteBrand('oppo'))
        }
        
    }, [])

    return (

        <div className="max-w-[1200px] mx-auto bg-[#00a63b] rounded-[14px] py-2 my-3">
            <p className="uppercase text-center text-[#fff] tracking-wide text-5xl font-semibold">tuần lễ Oppo</p>

            {/* Advertising - Quảng cáo */}
            <div className='h-[200px] w-[calc(_100%_-_20px)] mt-3 mb-9 mx-[10px]'>
                <div className="justify-center flex flex-row flex-nowrap">
                {
                    images.map((value, index) => (
                    <div key={index} >
                        <img className='relative rounded-[14px] mx-[5px] object-contain' src={value} alt='images promote'/>  
                    </div>
                    ))
                }
                </div>
            </div>

            {/* show phones */}
            <div className="flex flex-wrap flex-row justify-between my-5 gap-3 px-3 py-2">
            {
                promotePhones.map((value, index)=>(
                    <PhoneCard key={index} {...value} />
                ))
            }
            </div>
        </div>
    )
};