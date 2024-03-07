import Carousel from "../../components/Carousel"

const CrewImage = ({ item }) => {
  return (
    <div className="img-container flex justify-center w-[327px] h-[223px] md:w-fit md:h-[572px] lg:w-[445px] lg:h-[445px] border-b-[#383B4B] border-b-2">
      <img src={item.images.png} alt="crew"/>
    </div>
  )
}
const SlideIndicator = ({item, onClick, isActive}) => {
  return <div className={`${isActive ? ' bg-white' : 'bg-[#979797]'} h-2.5 w-2.5 rounded-full box-border inline-block hover:bg-white `} onClick={() => onClick(item)}></div>
}

const InfoContainer = ({ item }) => {
  return (
    <div className="info-container flex flex-col items-center justify-between h-full px-4 md:px-0 md:w-[458px] md:m-auto lg:items-start lg:px-0">
      <h3 className="font-bellefair text-sm md:text-[24px] lg:text-3xl uppercase text-[#5A5D64]">{item.role}</h3>
      <h3 className="font-bellefair text-[24px] md:text-[40px] lg:text-3xl  uppercase text-white">{item.name}</h3>
      <p className="font-barlow text-[15px] font-light pt-4 text-violet leading-6 text-center md:text-sm md:leading-7 md:tracking-[0px] md:pt-0 md:font-light lg:text-base lg:text-start lg:pr-9">{item.bio}</p>
    </div>
  )
}

const CrewCarousel = ({items}) => {
  return (
    <Carousel
          items={items}
          SlideIndicator={SlideIndicator}
          imageContainerClassName="md:mt-7 lg:justify-self-end lg:col-start-1 lg:col-end-12 lg:row-start-2 lg:row-end-3 lg:mt-0"
          slideIndicatorClassName="flex flex-row items-center justify-between mt-7 w-[88px] h-7 lg:col-start-15 lg:col-end-23"
          mainCarouselClassName="carousel flex flex-col-reverse items-center mt-8 lg:grid lg:grid-cols-24 lg:items-center"
          bottomContainerClassName="bottom-container mt-8 lg:col-start-15 lg:col-end-23 lg:row-start-2 lg:row-end-3"
          TopContainer={CrewImage}
          BottomContainer={InfoContainer}
        />
  )
}
export default CrewCarousel