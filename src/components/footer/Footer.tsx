import { about, intro, tel } from "./data";

export default function Footer() {

    return(
        <section className="w-full relative bottom-0 bg-white shadow-inner">
            <div className="z-10 grid grid-cols-3 max-w-screen-xl mx-auto">
                <ul className="grid grid-cols-1 font-normal p-5">
                    {
                        about.map((value, index)=>(

                            <li className="mb-2" key={index}>

                                <a href={value.link}>{value.name}</a>

                            </li>

                        ))
                    }
                </ul>
                <ul className="grid grid-cols-1 font-normal p-5">
                    {
                        intro.map((value, index)=>(

                            <li className="mb-2" key={index}>

                                <a href={value.link}>{value.name}</a>

                            </li>

                        ))
                    }
                </ul>
                <div className="grid grid-cols-1 font-norma p-5">
                    <p>
                        <strong>Tổng đài hỗ trợ</strong>
                        (Miễn phí gọi)
                    </p>
                    {
                        tel.map((value, index) => (
                            <p key={index}>
                                <span>{value.name}: </span>
                                <span>{value.number} </span>
                                ({value.shift})
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}