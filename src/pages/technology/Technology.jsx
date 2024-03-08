import { useLoaderData } from "react-router-dom"
import TechnologyCarousel from "./TechnologyCarousel"

const Technology = () => {
  const technologyDetails = useLoaderData()

  return (
    <main className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-no-repeat overflow-hidden w-full h-[710px] pt-[88px] md:h-[1024px] lg:h-[900px] lg:pt-32 lg:">
      <div className="text-center md:text-start md:mt-10 md:ml-[38.5px] lg:mt-20 lg:ml-40 lg:w-4/12 lg:absolute">
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] lg:text-lg lg:tracking-widest font-barlow-condensed font-bold text-[#5A5D64] pr-4">03</span>
        <span className="text-sm md:text-[20px] md:tracking-[3.38px] lg:text-lg lg:tracking-widest font-barlow-condensed text-white uppercase">Space launch 101</span>
      </div>
      <TechnologyCarousel items={technologyDetails}/>
    </main>
  )
}

export const technologyLoader = async() => {
  const res = await fetch('http://localhost:3000/technology')
  if(!res.ok) {
    throw Error('could not fetch data')
  }
  return res.json()
}
export default Technology