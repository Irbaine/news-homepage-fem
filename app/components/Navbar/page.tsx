"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
    return (
      <div className="flex w-full items-center justify-between text-dark-gray sm:mt-[2vh]">
        <div className="flex w-1/5 "> 
        <Image src={Logo} width={60} height={60} alt="" />
        </div>
        <div className="flex w-2/5 font-[500] items-center justify-between text-dark-gray sm:hidden">
        <Link href="/" className="hover:text-red">Home</Link>
        <Link href="/" className="hover:text-red">New</Link>
        <Link href="/" className="hover:text-red">Popular</Link>
        <Link href="/" className="hover:text-red">Trending</Link>
        <Link href="/" className="hover:text-red">Categories</Link>
        </div>
        <div className=" hidden sm:flex sm:self-right">
        <button className='flex flex-col justify-center items-center ' onClick={handleClick}>
          <span className={`bg-vdark-blue block transition-all duration-300 ease-out h-[3px] w-10 ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
          <span className={`bg-vdark-blue block transition-all duration-300 ease-out h-1 w-10 my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
          <span className={`bg-vdark-blue block transition-all duration-300 ease-out h-[3px] w-10 ${isOpen ? '-rotate-45 -translate-y-2': 'translate-y-0.5'} transition-all duration-300 ease-out `}></span>
        </button>
        </div>

      </div>
    )
  }