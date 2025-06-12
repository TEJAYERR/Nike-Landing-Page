import { footerLogo } from "../assets/images";
import { facebook, instagram, twitter } from "../assets/icons";
import { footerLinks } from "../data";
import { copyrightSign } from "../assets/icons";


export const Footer = () => {
    return(
        <div>
            <div className="text-lg flex justify-between items-start gap-20 max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <img src={footerLogo} alt="" width={150} className="cursor-pointer"/>
                    <p className="max-w-sm mt-7 text-gray-500">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards</p>
                    <div className="flex gap-4 mt-7 leading-7">
                        <div className="bg-white rounded-full w-fit p-2">
                            <img src={facebook} alt="" width={25}/>
                        </div>
                        <div className="bg-white rounded-full w-fit p-2">
                            <img src={twitter} alt="" width={25}/>
                        </div>
                        <div className="bg-white rounded-full w-fit p-2"> 
                            <img src={instagram} alt="" width={25} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-lg:w-full">
                    {footerLinks.map((block) =>
                        <div key={block.title}>
                            <h3 className="text-2xl font-semibold text-white">{block.title}</h3>
                            <ul className="mt-6 text-gray-500 text-lg">
                                {block.links.map((link)=>(
                                    <li className="mt-2 cursor-pointer hover:text-gray-800" key={link.name}><a href={link.link}>{link.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-white flex w-full justify-between mt-24 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-[0.7rem]">
                <p className="flex gap-1 cursor-pointer max-sm:justify-center"><img src={copyrightSign} alt="" /> copyright sign Copyright. All rights reserved</p>
                <p className="cursor-pointer">Terms & Conditions</p>
            </div>
        </div>
    );
};