import Header from "./header";
import MainHeader from "./mainHeader";

export default function Nav() {
    
    return (
        <section className='bg-yellow-400 h-[120px] relative mb-10'>
            <Header/>
            <MainHeader />
        </section>
    )
}