
import Navbar from './components/Navbar/page'
import Sidebar from './components/Sidebar/page'
import Mainbar from './components/Mainbar/page'
import Popular from "./components/Popular/page"
import pic1 from "../public/images/image-retro-pcs.jpg"
import pic2 from "../public/images/image-top-laptops.jpg"
import pic3 from "../public/images/image-gaming-growth.jpg"

export default function Home() {
  return (
    <main className="flex px-28 py-20 flex-col gap-14 items-center justify-between sm:py-8 sm:px-5 sm:gap-8">
      <Navbar/>
      <div className='flex w-full gap-8 sm:flex-col sm:gap-900'>
        <Mainbar />
        <Sidebar />
      </div>
 
      <div className="flex justify-evenly sm:flex-col sm:gap-10">
            <Popular pic={pic1} number={"01"} heading="Reviving Retro PCs" paragraph="What happen when old PCs are given modern upgrades" />
            <Popular pic={pic2} number={"02"} heading="Top 10 Laptops of 2022" paragraph="Our best picks for various needs and budgets" />
            <Popular pic={pic3} number={"03"} heading="The Growth of Gaming" paragraph="How the pandemic sparked fresh oppertunities" />
        </div>

    </main>
  )
}
