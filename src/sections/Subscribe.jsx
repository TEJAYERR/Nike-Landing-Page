


export const Subscribe = () => {
    return(
        <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:text-center">
            <h1 className="text-5xl font-bold leading-17 w-full">Sign Up for <span className="text-red-400">Updates</span> & Newsletter</h1>
            <div className="border-1 lg:max-w-[40%] w-full py-3 rounded-full flex flex-row items-center justify-between gap-5 px-3 pl-8">
                <input type="text" className="outline-none text-gray-600 placeholder:text-gray-600 text-lg w-[60%]" placeholder="subscibe@nike.com"/>
                <button type="submit" className="bg-red-400 text-white rounded-full cursor-pointer px-8 py-3 text-lg">sign up</button>
            </div>
        </div>
    );
};