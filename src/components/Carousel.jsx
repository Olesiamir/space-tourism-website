import { useState } from "react"

const Carousel = ({
  items,
  SlideIndicator,
  TopContainer,
  BottomContainer,
  imageContainerClassName = "top-container",
  slideIndicatorClassName = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const item = items[currentIndex]

  const handleClick = (item) => {
    const nextIndex = items.findIndex((listItem) => {
      return listItem.name === item.name
    })
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="carousel flex flex-col items-center mt-8">
      <div className={imageContainerClassName}><TopContainer item={item} /></div>
      <div className={slideIndicatorClassName}>
        {items.map((item, index) => <SlideIndicator key={item.name} item={item} onClick={handleClick} isActive={index === currentIndex}/>)}
      </div>
      <div className="bottom-container"><BottomContainer item={item} /></div>
    </div>
  )
}
export default Carousel