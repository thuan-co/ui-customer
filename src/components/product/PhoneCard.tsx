import { PhoneView } from "../../model/phone";

export default function PhoneCard(props:PhoneView) {
    return (
        <div className="w-[13rem] rounded-md shadow-lg bg-white relative py-3 px-[10px]">
            <div>
                <a href="/" className="flex flex-col items-center mt-4 hover:text-indigo-400">
                    <div id="phone-card-img" className=" flex items-center my-3">
                        <img src={props.avt} alt="Ảnh điện thoại" className="object-contain transition hover:scale-105"/>
                    </div>
                    <h3 className="block w-full text-left mb-2" id="name-phone">{props.name}</h3>
                    <strong className="block w-full text-left text-red-600">
                        {props.price}₫
                        <small className="text-[#eb5757] bg-[#fff0e9] rounded-md px-[1px] py-[2px] ml-3">-24%</small>
                    </strong>
                </a>
            </div>
        </div>
    )
}