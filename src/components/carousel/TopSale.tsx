import { listTopSales } from "./data";

export default function TopSale() {

    return (
        <div className="flex flex-row relative max-w-screen-xl mx-auto">
            <div className="w-[595px]">
                <img src={listTopSales.at(0)?.image_url} alt="" />
            </div>   
            <div className="w-[595px]">
                <img src={listTopSales.at(1)?.image_url} alt="" />
            </div>   
        </div>
    )
}