import right_arrow from '../assets/icons/arrow-right.svg';
import { statistics } from '../data';
import { useState } from 'react';
import { shoes } from '../data';

const Hero = () => {
    
    const [bigShoe, setBigShoe] = useState(shoes[0].bigShoe);
    function handleBigShoeDisplay(shoe){
        setBigShoe(shoe)
    }

    return(
        <div>
        <div id='home' className='w-full flex-1 flex items-center justify-around gap-5 max-xl:flex-col max-xl:items-start max-xl:justify-center'> 
            <div className='bg-white pl-15 max-xl:pr-[90px]'>
                <p className="text-red-400 font-sans text-[1.33rem] tracking-wider">Our Summer Collection</p>
                <h1 className="text-8xl mt-9 font-medium max-md:text-6xl">The New Arrival</h1>
                <h1 className="text-8xl mt-3 font-medium max-md:text-6xl"><b className="text-red-400">Nike</b> Shoes</h1>
                <p className="text-[1.25rem] mt-10 text-gray-600 font-normal">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                <div className='bg-red-400 max-w-max flex items-center justify-around space-x-5 text-white leading-1 py-4 px-5 mt-12 rounded-4xl text-[1.2rem] cursor-pointer'>
                    <h3>Shop now</h3>
                    <img src={right_arrow} alt="" />
                </div>
                <div className='flex items-center mt-20 gap-20'>
                        {statistics.map((item)=>
                            <span key={item.label}>
                                <h1 className='text-5xl font-medium'>{item.value}</h1>
                                <p className='font-sans font-medium text-gray-400'>{item.label}</p>
                            </span>
                        )}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center min-h-screen bg-gray-100 max-xl:w-full p-0">
                <img src={bigShoe} alt="bigshoe" />
                <div className=" flex gap-6 absolute -bottom-[5%] px-10">
                {shoes.map((shoe)=>
                    <img src={shoe.bigShoe} alt="shoe" onClick={()=>handleBigShoeDisplay(shoe.bigShoe)} width={100} className='border-2 border-red-400 rounded-lg cursor-pointer' key={shoe.bigShoe}/>
                )}
            </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;
