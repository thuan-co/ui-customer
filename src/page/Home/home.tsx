import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/Navbar";

export default function Home() {
    
    return (
        <section className="relative">
            <Nav />
            <Outlet />
            <Footer />
        </section>
    )
}