import { Outlet, useLoaderData } from "react-router-dom"
import DestinationsCarousel from "./DestinationsCarousel"


const DestinationLayout = () => {
  const planetDetails = useLoaderData()
  console.log(planetDetails)
  return (
    <main className="bg-destination-mobile md:bg-destination-tablet bg-cover bg-no-repeat w-full h-[850px] pt-[88px] md:h-[1024px] ">
      <div className="text-center md:text-start md:mt-10 md:ml-[38.5px]">
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] font-barlow-condensed font-bold text-gray-800 pr-4">01</span>
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] font-barlow-condensed text-white uppercase">Pick your destination</span>
      </div>
      <DestinationsCarousel items={planetDetails}/>
    </main>
  )
}

export const destinationLoader = async () => {
  const res = await fetch('http://localhost:3000/destinations')
  if(!res.ok) {
    throw new Error('could not fetch the data')
  }
  console.log(res)
  return res.json()
}


export default DestinationLayout