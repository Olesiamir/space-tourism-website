import Carousel from "../../components/Carousel"

const CrewImage = ({ item }) => {
  return (
    <div className="img-container flex justify-center w-[327px] h-[223px] md:w-fit md:h-[572px] lg:w-fit lg:h-[712px] border-b-[#383B4B] border-b-2">
      <img src={item.images.png} alt="crew"/>
    </div>
  )
}
const SlideIndicator = ({item, onClick, isActive}) => {
  return <div className={`${isActive ? ' bg-white' : 'bg-[#979797]'} h-2.5 w-2.5 rounded-full box-border inline-block hover:bg-white `} onClick={() => onClick(item)}></div>
}

const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-4 md:px-0 md:w-[458px] md:m-auto lg:items-start lg:m-0 lg:px-0 lg:w-full">
      <h3 className="font-bellefair text-sm md:text-[24px] lg:text-xl uppercase text-[#5A5D64]">{item.role}</h3>
      <h3 className="font-bellefair text-[24px] md:text-[40px] lg:text-2xl  uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] font-light pt-4 text-violet leading-6 text-center md:text-sm md:leading-7 md:tracking-[0px] md:pt-0 md:font-light lg:text-base lg:text-start lg:pr-28 lg:pt-7">{item.bio}</p>
    </div>
  )
}

const CrewCarousel = ({items}) => {
  return (
    <Carousel
          items={items}
          SlideIndicator={SlideIndicator}
          imageContainerClassName="md:mt-7 lg:justify-self-end lg:col-start-12 lg:col-end-24 lg:row-start-1 lg:row-end-7 lg:mt-0"
          slideIndicatorClassName="flex flex-row items-center justify-between mt-7 w-[88px] h-7 lg:w-[132px] lg:self-baseline lg:col-start-3 lg:col-end-7 lg:row-start-6 lg:row-end-6 lg:m-0 "
          mainCarouselClassName="carousel flex flex-col-reverse items-center mt-8 lg:grid lg:grid-cols-24 lg:items-center lg:mt-[60px] lg:grid-rows-6"
          bottomContainerClassName="bottom-container mt-8 lg:col-start-3 lg:col-end-12 lg:row-start-2 lg:row-end-6 lg:m-0"
          TopContainer={CrewImage}
          BottomContainer={InfoContainer}
        />
  )
}
export default CrewCarousel