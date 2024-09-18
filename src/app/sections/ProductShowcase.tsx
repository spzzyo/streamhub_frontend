import Image from "next/image";
import productimg from "../assets/image.png";
export const ProductShowcase =() => {
    return (
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#000000,#00224D,#5D0E41,#A0153E] ">
       
        <div className = "container  ">
        <h2 className="text-center font-bold text-5xl tracking-tighter">Show Case</h2>
  
    <p className="text-center mt-5 text-xl text-white/70 "> 
    The sun was setting, casting a warm orange glow across the horizon. Birds chirped softly as the breeze rustled through the trees. In the distance, waves gently lapped against the shore. The peaceful scene brought a sense of calm, a moment to pause and appreciate nature’s quiet beauty.
    </p>
    <div className="flex mt-14 items-center justify-center ">    
    <Image src={productimg} alt="product showcase" className="w-[50%] h-auto"/>
    </div>
        </div>
    </div>
    );
};

