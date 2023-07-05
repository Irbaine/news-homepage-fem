import Image from "next/image";
import Link from "next/link";
import pic1 from "../../../public/images/image-retro-pcs.jpg"
import pic2 from "../../../public/images/image-top-laptops.jpg"
import pic3 from "../../../public/images/image-gaming-growth.jpg"

interface values {
    number: string,
    heading: string,
    paragraph: string,
    pic?: any,
}


export default function Popular({pic, number, heading, paragraph}:values){
    return(
        <div className="flex justify-between">
            <Image src={pic} alt="" height={150} width={85}/>
            <div className="flex flex-col justify-between mx-[5%]">
                <h1 className="text-light-gray text-[1.9rem] font-semibold leading-none">{number}</h1>
                <Link href="/" className="text-vdark-blue text-[1.1rem] font-semibold hover:text-red">{heading}</Link>
                <p className="text-dark-gray text-[0.88rem] font-[50]">{paragraph}</p>
            </div>
        </div>
    )
}