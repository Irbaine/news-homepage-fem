

interface Paragraph {
    strong: string,
    text: string,
    dash: boolean,
}

export function Paragraph({strong, text, dash =false}: Paragraph){
    return(
        <div className="w-full font-thin text-light-gray">
            <b className="text-white text-[1.1rem] font-semibold cursor-pointer hover:text-yellow">{strong}</b>
            <p className="pt-2 text-[0.88rem] font-[50]">{text}</p>
            {dash? <div className="bg-light-gray bg-opacity-40 w-full h-[1px] my-[10%]">&nbsp;</div>: null}
        </div>
    )
}


export default function Sidebar() {
    return (
      <div className="w-[32%] bg-vdark-blue p-[2.5%] sm:p-[6%] sm:w-full sm:my-[5vh] ">
        <h1 className="text-[2.2rem] font-semibold text-yellow pb-[5%]">New</h1>
        <Paragraph strong="Hydrogen VS Electric Cars" text="Will hydrogen-fueled cars ever catch up to EVs?" dash={true}/>
        <Paragraph strong="The Downsides of AI Artistry" text="What are the possible adverse effects of on-demand AI image generation?" dash={true}/>
        <Paragraph strong="Is VC Funding Is Drying Up?" text="Private funding by VS firms is down 50% YOY. We take a look on what that means." dash={false}/>
      </div>
    )}