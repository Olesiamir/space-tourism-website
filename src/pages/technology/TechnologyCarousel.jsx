import Carousel from "../../components/Carousel"
import { screens } from "../../config"
import { useMediaQuery } from "react-responsive"

const TechnologyImage = ({ item }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  
  return (
    <div className="img-container flex justify-center w-full h-full  md:h-[310px] lg:w-[515px] lg:h-[527px]">
      {isDesktop
        ? <img src={item.images.portrait} alt="tech" />
        : <img src={item.images.landscape} alt="tech" />
      } 
    </div>
  )
}
const SlideIndicator = ({item, index, onClick, isActive}) => {
  return <div className={`${isActive ? ' bg-white' : 'bg-transparent text-white'} h-10 w-10 md:h-[60px] md:w-[60px]
  lg:h-20 lg:w-20 md:mt-14 rounded-full text-center leading-[40px] md:leading-[60px] lg:leading-[80px] box-border font-bellefair sm:text-sm md:text-md lg:text-xl lg:mt-0 border-gray-600 border-[1px] inline-block hover:bg-white hover:text-black cursor-pointer`} onClick={() => onClick(item)}>{index+1}</div>
}

const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-6 md:px-0 md:w-[458px] md:m-auto lg:items-start lg:m-0 lg:px-0 lg:w-full">
      <p className="text-violet font-barlow-condensed text-xs md:text-sm font-extralight uppercase">the terminology...</p>
      <h3 className="font-bellefair text-md md:text-[40px] lg:text-2xl pt-2.5 md:py-4 lg:p-0 uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] font-light pt-4 px-0.5 text-violet leading-6 text-center md:text-sm md:leading-7 md:tracking-[0px] md:pt-0 md:font-light lg:text-base lg:text-start lg:pr-24">{item.description}</p>
    </div>
  )
}

const TechnologyCarousel = ({items}) => {
  return (
    <Carousel
          items={items}
          SlideIndicator={SlideIndicator}
          imageContainerClassName="md:mt-7 lg:justify-self-end lg:col-start-24 lg:row-start-1 lg:row-end-7 lg:mt-0"
          slideIndicatorClassName="flex flex-row lg:flex-col items-center w-[152px] md:w-[210px] lg:w-[145px] justify-between h-fit-content mt-8 md:mt-0 lg:self-center lg:col-start-3 lg:col-end-7 lg:row-start-2 lg:row-end-6 lg:m-0 lg:gap-8"
          mainCarouselClassName="carousel flex flex-col items-center mt-8 lg:grid lg:grid-cols-24 lg:items-center lg:mt-[60px] lg:grid-rows-6 lg:mt-32"
          bottomContainerClassName="bottom-container mt-8 md:mt-11 lg:col-start-6 lg:col-end-15 lg:row-start-2 lg:row-end-6 lg:m-0"
          TopContainer={TechnologyImage}
          BottomContainer={InfoContainer}
        />
  )
}
export default TechnologyCarousel