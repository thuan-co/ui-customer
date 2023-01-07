import TopSale from "../../components/carousel/TopSale";
import Features from "../../components/category/Features";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/Navbar";
import PhoneCard from "../../components/product/PhoneCard";
import { fakePhoneCard } from "../../model/phone";

export default function Home() {
    
    return (
        <>
            <Nav />
            <TopSale />
            <div className="grid grid-flow-col my-5 gap-4 max-w-screen-xl mx-auto bg-cyan-600 rounded-md px-3 py-2">
                {
                    fakePhoneCard.map((value, index)=> (
                        <PhoneCard key={index} {...value} />
                    ))
                }
            </div>

            {/* Danh mục nổi bật - Features category */}
            <Features />

            <Footer />
        </>
    )
}