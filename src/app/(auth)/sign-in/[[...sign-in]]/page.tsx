// import { SignIn } from "@clerk/nextjs";

import { SignIn } from "@clerk/nextjs"

 
// export default function Page() {
//   return <SignIn />;
// }



export  default function Page() {
    return (
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#000000,#00224D,#5D0E41,#A0153E] ">
       
        <div className = "container  ">
          <SignIn/>
  
   
    <div className="flex mt-14 items-center justify-center ">    
    </div>
        </div>
    </div>
    );
};

