export const Hero =() => {
    return (
        <div className="bg-black text-white h-[94vh] bg-[linear-gradient(to_bottom,#000000,#00224D,#5D0E41,#A0153E,#FF204E)] py-[72px]  sm:py-24 relative overflow-clip">
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#FF204E%] bg-[radial-gradient(closest-side,#000000_82%,#FF204E)] top-[calc(100%-96px)] blur:md sm:top-[calc(100%-120px)] " />        
        <div className = "container relative">
            <div className="flex items-center justify-center">
            <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]"> Version is Here </span>
                <span> Read More </span>
            </a>
            </div>
            <div className="flex justify-center">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">Stream Hub</h1>
            </div>
            <div className="flex justify-center">
            <p className="text-center text-xl mt-8 max-w-md font-bold">
            A live streaming platform with focus on enhanced blockchain technologies.
            </p>
            </div>
            <div className="flex justify-center mt-8">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-bold">Get for free</button>
            </div>
        </div>
        {/* <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black items-center" > */}
    </div>
    );
};

