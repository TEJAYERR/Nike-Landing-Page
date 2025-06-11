import { shoe8 } from "../assets/images";


export const SuperQuality = () => {
    return(
        <div className="flex items-center gap-10 justify-between max-lg:flex-col">
            <div className="min-lg:w-[45%] flex flex-col items-start">
                <h1 className="text-5xl font-semibold">We Provide You <span className="text-red-400">Super Quality</span> Shoes</h1>
                <p className="mt-8 text-gray-600 font-sans">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="mt-8 text-gray-600 font-sans">Our dedication to detail and excellence ensures your satisfaction</p>
                <button className="px-10 py-3 bg-red-400 text-white rounded-4xl mt-15 cursor-pointer">View Details</button>
            </div>
            <div>
                <img src={shoe8} alt="shoe"/>
            </div>
        </div>
    );
};
