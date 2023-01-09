import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home/home";
import Login from "../page/Login/login";
import App from "../App";
import MainLayout from "../page/Home/MainLayout";
import CustomRouter from "./CustomRouter";

export default function AppRouter() {
    return(
        <CustomRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="" index element={<MainLayout />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </CustomRouter>   
    )
}