import { PolicyPhone, fakePolicyPhone } from "../../page/Product/data";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

export default function Policy() {

    return(
        <div className="rounded-md border-[#3a363696] border-solid border-[1px] my-2">
            <div>
                <ul className="flex flex-row flex-wrap">
                    {
                        fakePolicyPhone.map((item, index) => (
                            <li key={index} className='w-1/2 px-1 font-light text-left'>
                                <div className="grid grid-cols-[10%_90%] items-center text-sm">
                                    <LocalPoliceIcon/>
                                    <p>{item.content}. 
                                        <a href={item.reference}>
                                            <span className="text-blue-500">Xem chi tiết</span>
                                        </a>
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}