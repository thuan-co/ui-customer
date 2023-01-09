import { Outlet } from "react-router-dom";
import TopSale from "../../components/carousel/TopSale";
import { fakePhoneCard } from "../../model/phone";
import PhoneCard from "../../components/product/PhoneCard";
import Features from "../../components/category/Features";

export default function MainLayout() {
    return (
        <>
            <TopSale />
            <div className="flex flex-wrap flex-row justify-between my-5 gap-3 max-w-screen-xl mx-auto bg-cyan-600 rounded-md px-3 py-2">
                {
                    fakePhoneCard.map((value, index)=> (
                        <PhoneCard key={index} {...value} />
                    ))
                }
            </div>

            {/* Danh mục nổi bật - Features category */}
            <Features />
        </>
    )
}