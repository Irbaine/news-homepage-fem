import Image from "next/image";
import Background from "../../../public/images/image-web-3-desktop.jpg"
import MobileBackground from "../../../public/images/image-web-3-mobile.jpg"


export default function Mainbar() {
    return (
        <div className="w-[66%] p-0 flex flex-col gap-10 space-between sm:w-full">
            <Image src={Background} alt="" width={900} height={300}  className="sm:hidden"/>
            <Image src={MobileBackground} alt="" width={350} height={300}  className="hidden sm:block sm:self-center"/>
            <div className="flex justify-between sm:flex-col sm:gap-5">
                <h1 className="flex w-1/2 text-bold text-6xl font-black text-vdark-blue pr-[10%] sm:w-full sm:text-5xl sm:pr-[1%]">The Bright Future of Web 3.0?</h1>
                <div className="flex w-1/2 flex-col justify-between pr-[4%] sm:w-full sm:gap-5">
                    <div className="text-dark-gray font-medium text-sm">We dive into the evolution of the web that claims to put the power of the platform back into the hnads of people. But is it really fulfilling its promise?</div>
                    <button className="text-white text-btn text-bold py-3 p-[5px] w-[55%]  bg-red hover:bg-vdark-blue self-start sm:w-1/2">READ MORE</button>  
                </div>

            </div>
        </div>
    )}