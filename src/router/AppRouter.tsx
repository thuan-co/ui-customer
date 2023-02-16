import { Route, Routes } from "react-router-dom";
import MainLayout from "../page/Home/MainLayout";
import Home from "../page/Home/home";
import Login from "../page/Login/login";
import Product from "../page/Product/Product";
import History from "../page/history/History";
import Order from "../page/order/Order";
import CustomRouter from "./CustomRouter";

export default function AppRouter() {
    return(
        <CustomRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="" index element={<MainLayout />} />
                    <Route path="login" element={<Login />} />
                    <Route path="product" element={<Product />} />
                    <Route path="muahang" element={<Order />} />
                    <Route path="lichsu" element={<History />} />
                </Route>
            </Routes>
        </CustomRouter>   
    )
}