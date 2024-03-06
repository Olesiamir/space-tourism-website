import Carousel from "../../components/Carousel"

const SlideIndicator = ({item, onClick, isActive}) => {
  return <div className={`${isActive ? 'border-b-white text-white' : ''}  box-border border-b-2 border-transparent inline-block  text-violet uppercase font-barlow-condensed text-xs md:text-sm hover:text-white h-full`} onClick={() => onClick(item) }>{item.name}</div>
}
const DestinationImage = ({ item }) => {
  return (
    <div className="img-container flex justify-center w-[170px] h-[170px] md:w-[300px] md:h-[300px]">
      <img src={item.images.webp} alt="planet"/>
    </div>
  )
}
const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-4 md:px-24 ">
      <h3 className="font-bellefair text-2xl md:text-2xxl md:mt-8 uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] text-violet leading-6 text-center md:text-sm md:leading-7 md:tracking-[0px] md:font-light">{item.description}</p>
      <hr className="w-[327px] md:w-[573px] h-px border-[#383B4B] my-8 md:mb-7"/>
      <div className="bottom-info md:flex md:w-[573px] md:gap-3 md:px-16">
        <div className="distance flex flex-col items-center justify-between md:justify-evenly md:flex-1">
          <p className="font-barlow-condensed text-xs text-violet uppercase pb-3 md:pb-0">avg.distance</p>
          <p className="font-bellefair text-white text-lg uppercase">{item.distance}</p>
        </div>
        <div className="time flex flex-col items-center justify-between mt-7 md:mt-0 md:flex-1">
          <p className="font-barlow-condensed text-xs text-violet uppercase pb-3 md:pb-0">est.travel time</p>
          <p className="font-bellefair text-white text-lg uppercase">{item.travel}</p>
        </div>
      </div>
    </div>
  )
}


const DestinationsCarousel = ({items}) => {
  return (
    <Carousel
          items={items}
          SlideIndicator={SlideIndicator}
          imageContainerClassName="md:mt-7"
          slideIndicatorClassName="flex flex-row items-center justify-between mt-7 w-[238px] h-7 md:mt-14 md:w-[285.5px]"
          TopContainer={DestinationImage}
          BottomContainer={InfoContainer}
        />
  )
}
export default DestinationsCarousel