import logoImg from "../assets/logosaas.png";
import Image from 'next/image';
import MenuIcon from '../assets/menu.svg';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'



export const NavigationBar = () =>{
    return (
        <div className="bg-black">
        <div className="px-4 items-center">
            <div className="py-4 flex items-center justify-between">
                <div className="relative">
                <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#a8a9ad,#b4b5b8,#c0c0c3,#cbcccd,#d7d7d8,#e3e3e3)] blur-md"></div>
                <Image src={logoImg} alt="logo" className="h-12 w-12 px-2 relative"/>
                </div>
                <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                <MenuIcon className="text-white"/>
                </div>
                <nav className="flex gap-6 items-center hidden sm:flex">
                    <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> Home</a>
                    <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> About</a>
                    <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> About</a>
                    <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> About</a>
                    <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition"> About</a>
                    <button className="bg-white py-2 px-2 rounded-lg">Get Started</button>
                </nav>
                <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            </div>
        </div>
        </div>
    );
};