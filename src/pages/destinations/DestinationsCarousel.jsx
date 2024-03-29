import { useMediaQuery } from "react-responsive"
import Carousel from "../../components/Carousel"

const SlideIndicator = ({item, onClick, isActive}) => {
  return <div className={`${isActive ? 'border-b-white text-white' : ''}  box-border border-b-2 border-transparent inline-block  text-violet uppercase font-barlow-condensed text-xs md:text-sm hover:text-white hover:border-b-2 hover:border-b-[#979797] h-full cursor-pointer`} onClick={() => onClick(item) }>{item.name}</div>
}
const DestinationImage = ({ item }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  return (
    <div className="img-container flex justify-center w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]">
      {isDesktop ? <img src={item.images.png} alt="planet"/> : <img src={item.images.webp} alt="planet"/>}
    </div>
  )
}
const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-4 md:px-24 lg:items-start lg:px-0">
      <h3 className="font-bellefair text-2xl md:text-2xxl lg:text-3xl md:mt-8 uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] text-violet leading-6 text-center md:text-sm md:leading-7 md:tracking-[0px] md:font-light lg:text-base lg:text-start lg:pr-9">{item.description}</p>
      <hr className="w-[327px] md:w-[573px] lg:w-[444px] h-px border-[#383B4B] my-8 md:mb-7"/>
      <div className="bottom-info md:flex md:w-[573px] md:gap-3 md:px-16 lg:p-0 lg:w-[445px] ">
        <div className="distance flex flex-col items-center justify-between md:justify-evenly md:flex-1 lg:items-start">
          <p className="font-barlow-condensed text-xs text-violet uppercase pb-3 md:pb-0">avg.distance</p>
          <p className="font-bellefair text-white text-lg uppercase">{item.distance}</p>
        </div>
        <div className="time flex flex-col items-center justify-between mt-7 md:mt-0 md:flex-1 lg:items-start">
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
          imageContainerClassName="md:mt-7 lg:justify-self-end lg:col-start-1 lg:col-end-12 lg:row-start-2 lg:row-end-3 lg:mt-0"
          slideIndicatorClassName="flex flex-row items-center justify-between mt-7 w-[238px] h-7 md:mt-14 md:w-[285.5px] lg:col-start-15 lg:col-end-23"
          mainCarouselClassName="carousel flex flex-col items-center mt-8 lg:grid lg:grid-cols-24 lg:items-center"
          bottomContainerClassName="bottom-container lg:col-start-15 lg:col-end-23 lg:row-start-2 lg:row-end-3"
          TopContainer={DestinationImage}
          BottomContainer={InfoContainer}
        />
  )
}
export default DestinationsCarousel