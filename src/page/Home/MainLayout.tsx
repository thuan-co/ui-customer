import TopSale from "../../components/carousel/TopSale";
import Features from "../../components/category/Features";
import { OppoPromote } from "../../components/promote/phone/OppoPromote";

export default function MainLayout() {
    
    return (
        <>
            <TopSale />
            {/* <div className="flex flex-wrap flex-row justify-between my-5 gap-3 max-w-[1200px] mx-auto bg-cyan-600 rounded-[14px] px-3 py-2">
                {
                    fakePhoneCard.map((value, index)=> (
                        <PhoneCard key={index} {...value} />
                    ))
                }
            </div> */}

            {/* List oppo products promote */}
            <OppoPromote />
            {/* Danh mục nổi bật - Features category */}
            <Features />
        </>
    )
}