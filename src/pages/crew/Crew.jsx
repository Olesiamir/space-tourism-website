import { useLoaderData } from "react-router-dom"
import CrewCarousel from "./CrewCarousel"

const Crew = () => {
  const crewDetails = useLoaderData()

  return (
    <main className="bg-crew-mobile md:bg-crew-tablet/[0.6] lg:bg-crew-desktop bg-cover bg-no-repeat bg-blend-overlay bg-[#0000005e] overflow-hidden w-full h-[710px] pt-[88px] md:h-[1024px] lg:h-[900px] lg:pt-32 lg:">
      <div className="text-center md:text-start md:mt-10 md:ml-[38.5px] lg:mt-16 lg:ml-40">
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] lg:text-lg lg:tracking-widest font-barlow-condensed font-bold text-[#5A5D64] pr-4">02</span>
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] lg:text-lg lg:tracking-widest font-barlow-condensed text-white uppercase">Meet your crew</span>
      </div>
      <CrewCarousel items={crewDetails}/>
    </main>
  )
}

export const crewLoader = async()  => {
  const res = await fetch('http://localhost:3000/crew')
  if(!res.ok) {
    throw Error('could not fetch data')
  }
  return res.json()
}
export default Crew