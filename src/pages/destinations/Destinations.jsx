import { Outlet, useLoaderData } from "react-router-dom"
import DestinationsCarousel from "./DestinationsCarousel"


const Destinations = () => {
  const planetDetails = useLoaderData()
  console.log(planetDetails)
  return (
    <main className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover bg-no-repeat w-full h-[850px] pt-[88px] md:h-[1024px] lg:h-[900px] lg:pt-32 lg:">
      <div className="text-center md:text-start md:mt-10 md:ml-[38.5px] lg:mt-16 lg:ml-40">
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] lg:text-lg lg:tracking-widest font-barlow-condensed font-bold text-gray-800 pr-4">01</span>
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] lg:text-lg lg:tracking-widest font-barlow-condensed text-white uppercase">Pick your destination</span>
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


export default Destinations