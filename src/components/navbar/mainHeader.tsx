import { listMenuItem } from "./data"

export default function MainHeader() {
    
    return(

        <div className="h-10 p-2 flex flex-row mt-3 justify-around items-center max-w-screen-xl mx-auto bg-yellow-400">
            
            <div className="relative w-full -mx-2 pb-3">         
                <ul id="main-menu-header" className="flex flex-row w-full justify-between">
                    {
                        listMenuItem.map((index, value) => (
                                <li className="bg-yellow-400" key={value}>
                                    <a href="/" className="flex flex-row p-2 relative justify-center text-sm">
                                        <i>
                                            <img className="object-cover h-5 mr-2" src={index.icon} alt={index.name} />
                                        </i>
                                        <span>{index.name}</span>
                                    </a>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        </div>
    )
}