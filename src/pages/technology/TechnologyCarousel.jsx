import Carousel from "../../components/Carousel"
import { screens } from "../../config"

const TechnologyImage = ({ item }) => {
  return (
    <div className="img-container flex justify-center w-full h-full md:w-fit md:h-[572px] lg:w-fit lg:h-[712px] border-b-[#383B4B] border-b-2">
      <picture>
        <source media={`(min-width:${screens.sm})`} srcSet={item.images.landscape} />
        <source media={`(min-width:${screens.lg})`} srcSet={item.images.portrait} />
        <img src={item.images.landscape} alt="Flowers" className="w-full h-full" />
      </picture> 
    </div>
  )
}
const SlideIndicator = ({item, index, onClick, isActive}) => {
  return <div className={`${isActive ? ' bg-white' : 'bg-transparent text-white'} h-10 w-10 rounded-full text-center leading-[40px] box-border border-gray-600 border-[1px] inline-block hover:bg-white hover:text-black cursor-pointer`} onClick={() => onClick(item)}>{index+1}</div>
}

const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-6 md:px-0 md:w-[458px] md:m-auto lg:items-start lg:m-0 lg:px-0 lg:w-full">
      <p className="text-violet font-barlow-condensed text-xs font-extralight uppercase">the terminology...</p>
      <h3 className="font-bellefair text-md lg:text-xl pt-2.5 uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] font-light pt-4 px-0.5 text-violet leading-6 text-center md:text-sm md:leading-7 md:tracking-[0px] md:pt-0 md:font-light lg:text-base lg:text-start lg:pr-28 lg:pt-7">{item.description}</p>
    </div>
  )
}

const TechnologyCarousel = ({items}) => {
  return (
    <Carousel
          items={items}
          SlideIndicator={SlideIndicator}
          imageContainerClassName="md:mt-7 lg:justify-self-end lg:col-start-12 lg:col-end-24 lg:row-start-1 lg:row-end-7 lg:mt-0"
          slideIndicatorClassName="flex flex-row items-center w-[152px] justify-between h-fit-content mt-8 lg:self-baseline lg:col-start-3 lg:col-end-7 lg:row-start-6 lg:row-end-6 lg:m-0 "
          mainCarouselClassName="carousel flex flex-col items-center mt-8 lg:grid lg:grid-cols-24 lg:items-center lg:mt-[60px] lg:grid-rows-6"
          bottomContainerClassName="bottom-container mt-8 lg:col-start-3 lg:col-end-12 lg:row-start-2 lg:row-end-6 lg:m-0"
          TopContainer={TechnologyImage}
          BottomContainer={InfoContainer}
        />
  )
}
export default TechnologyCarousel