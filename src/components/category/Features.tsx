import { CateFeature, fakeFeature } from "./data"

function CategoryItem( props:CateFeature ) {
    return (
        <div className="w-24 relative flex justify-center bg-[#f3f3f3]">
            <a href="/" className=''>
                <div className="flex justify-center">
                    <img src={props.img_url} alt="Ảnh danh mục" className="w-[60px] object-contain"/>
                </div>
                <span className="font-normal block text-center relative">{props.name}</span>
            </a>
        </div>
    )
}

export default function Features() {
    
    return(
        <div className="max-w-screen-xl mx-auto bg-[#f3f3f3] my-5 rounded-md p-3">
            <div>
                <h3 className="uppercase font-bold text-base mb-3">Danh mục nổi bật</h3>
            </div>
            <div className="flex flex-row flex-wrap justify-around gap-y-10 relative">
                {
                    fakeFeature.map((value, index) => (
                        <CategoryItem key={index} {...value}/>
                    ))
                }
            </div>
            
        </div>
    )
}