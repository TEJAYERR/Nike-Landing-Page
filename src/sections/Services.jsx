import { services } from "../data";


export const Services = () => {
    return(
        <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
            {services.map((service)=>
                <div className="bg-white py-15 px-6 rounded-2xl shadow-2xl" key={service.label}>
                    <img src={service.imgURL} alt="image" width={40} height={40} className="bg-red-400 rounded-full p-2"/>
                    <h3 className="mt-6 font-bold text-2xl">{service.label}</h3>
                    <p className="mt-6 text-gray-600 font-sans text-lg">{service.subtext}</p>
                </div>
            )}
        </div>
    );
};