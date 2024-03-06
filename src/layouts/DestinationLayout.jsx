import { useLoaderData } from "react-router-dom"
import Carousel from "../components/Carousel"

const SlideIndicator = ({item, onClick, isActive}) => {
  return <div className={`${isActive ? 'border-b-white text-white' : ''}  box-border border-b-2 border-transparent inline-block  text-violet uppercase font-barlow-condensed text-xs hover:text-white h-full`} onClick={() => onClick(item) }>{item.name}</div>
}
const DestinationImage = ({ item }) => {
  return (
    <div className="img-container flex justify-center">
      <img src={item.images.webp} alt="planet" width={170} height={170}/>
    </div>
  )
}
const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-4">
      <h3 className="font-bellefair text-2xl uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] text-violet leading-6 text-center">{item.description}</p>
      <hr className="w-[327px] h-px border-[#383B4B] my-8"/>
      <div className="distance flex flex-col items-center justify-between">
        <p className="font-barlow-condensed text-xs text-violet uppercase pb-3">avg.distance</p>
        <p className="font-bellefair text-white text-lg uppercase">{item.distance}</p>
      </div>
      <div className="time flex flex-col items-center justify-between mt-7">
        <p className="font-barlow-condensed text-xs text-violet uppercase pb-3">est.travel time</p>
        <p className="font-bellefair text-white text-lg uppercase">{item.travel}</p>
      </div>
    </div>
  )
}


const DestinationLayout = () => {
  const planetDetails = useLoaderData()
  console.log(planetDetails)
  return (
    <main className="bg-destination-mobile h-[850px] pt-[88px]">
      <div className="text-center">
        <span className="text-sm font-barlow-condensed font-bold text-gray-800 pr-4">01</span>
        <span className="text-sm font-barlow-condensed text-white uppercase">Pick your destination</span>
      </div>
      <Carousel
          items={planetDetails}
          SlideIndicator={SlideIndicator}
          slideIndicatorClassName="flex flex-row items-center justify-between mt-7 w-[238px] h-7"
          TopContainer={DestinationImage}
          BottomContainer={InfoContainer}
        />
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