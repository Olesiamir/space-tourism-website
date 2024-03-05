import { useLoaderData } from "react-router-dom"
import Carousel from "../components/Carousel"

const SlideIndicator = ({item, onClick, isActive}) => {
  return <div className={`${isActive ? 'border-b-white' : ''}  box-border border-b-2 border-transparent text-white`} onClick={() => onClick(item) }>{item.name}</div>
}
const DestinationImage = ({ item }) => {
  return (
    <div className="img-container">
      <img src={item.images.webp} alt="planet" />
    </div>
  )
}
const InfoContainer = ({ item }) => {
  return (
    <div className="info-container">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <hr />
      <p>avg.distance</p>
      <p>{item.distance}</p>
      <p>est.travel time</p>
      <p>{item.travel}</p>
    </div>
  )
}


const DestinationLayout = () => {
  const planetDetails = useLoaderData()
  console.log(planetDetails)
  return (
    <main className="bg-destination-mobile h-[850px]">
      <Carousel items={planetDetails} SlideIndicator={SlideIndicator} TopContainer={DestinationImage} BottomContainer={InfoContainer}/>
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