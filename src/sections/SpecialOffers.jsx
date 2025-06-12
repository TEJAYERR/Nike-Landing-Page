import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";


export const SpecialOffers = () => {
    return(
        <div className="flex-1 flex justify-center items-center gap-10 max-xl:flex-col-reverse">
            <div>
                <img src={offer} alt="" className='' width={550}/>
            </div>
            <div className="flex-1 flex flex-col text-lg max-xl:w-[50%] max-lg:w-[100%]">
                <h1 className="text-5xl text-red-400 font-bold">Special <span className="text-black">Offers</span></h1>
                <p className="mt-8 text-gray-600 text-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className="mt-8 text-gray-600">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional</p>
                <div className="mt-8 flex-1 flex items-center gap-5 justify-start max-sm:flex-col max-sm:justify-start max-sm:items-start">
                    <button className="flex gap-3 px-10 py-3 bg-red-400 text-white rounded-full cursor-pointer">Shop now <img src={arrowRight} alt="" width={25}/></button>
                    <button className="px-10 py-3 bg-white border rounded-full text-gray-600 cursor-pointer">Learn more</button>
                </div>
            </div>
        </div>
    );
};