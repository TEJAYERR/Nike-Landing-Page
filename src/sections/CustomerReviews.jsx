import { reviews } from "../data";
import { star } from "../assets/icons";


export const CustomerReviews = () => {
    return(
        <div className="max-sm:text-lg">
            <h1 className="text-5xl font-semibold text-center max-sm:text-[2rem]">What Our <span className="text-red-400">Customers</span> Say?</h1>
            <p className="mt-6 max-w-lg m-auto text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className="mt-10 flex-1 flex items-center justify-evenly gap-7 px-10 flex-wrap max-lg:flex-col text-center">
                {reviews.map((review)=>
                    <div className="flex flex-col items-center text-center space-y-1 justify-center" key={review.customerName}>
                        <img src={review.imgURL} alt="" width={100} className="rounded-full mt-4"/>
                        <p className="max-w-sm mt-4 text-gray-600 text-lg">{review.feedback}</p>
                        <span className="flex gap-2">
                            <img src={star} alt="" width={15}/>
                            <p>({review.rating})</p>
                        </span>
                        <h3 className="font-bold text-lg">{review.customerName}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};