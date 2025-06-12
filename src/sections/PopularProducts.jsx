import { products } from "../data";
import star from '../assets/icons/star.svg'


const PopularProducts = () => {
    return(
        <div>
            <h1 className="text-5xl font-semibold max-sm:text-[2rem]">Our
                <span className="text-red-400"> Popular </span>
                Products
            </h1>
            <p className="mt-10 w-[50%] text-gray-500 max-sm:w-full">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            <div className="flex gap-5 pt-20 max-xl:flex-wrap justify-around items-center">
                {products.map((product)=>
                    <div className="max-xl:text-center" key={product.name}>
                        <img src={product.imgURL} alt="" className="hover:rotate-6 transition-all cursor-pointer"/>
                        <div className="pt-8 flex gap-2 items-center max-xl:justify-center">
                            <img src={star} alt="" width={20} height={20} />
                            <p>(4.5)</p>
                        </div>
                        <h3 className="mt-5 font-bold">{product.name}</h3>
                        <p className="text-red-400 mt-2">{product.price}</p>
                    </div>
                )}
            </div>
        </div>
    );;
};

export default PopularProducts