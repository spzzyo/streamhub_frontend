import logoImg from "../assets/logo.svg"
import Image from 'next/image';


export const NavigationBar = () =>{
    return (
        <div className="container bg-black">
            <div className="py-4">

                <Image src={logoImg} alt="logo" className="h-12 w-12 px-2"/>
            </div>
        </div>
    )
}