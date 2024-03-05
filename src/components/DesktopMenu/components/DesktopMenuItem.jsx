import { Link } from "react-router-dom"

const DesktopMenuItem = ({ item }) => {
  return (
    <Link to={item.to} className='flex items-center font-barlow-condensed h-[31px] text-sm text-white font-extralight uppercase'>
      <span className='font-bold inline-block min-w-5 text-white pr-3'>
        {item.id}
      </span>
      {item.title}
    </Link>
  )
}
export default DesktopMenuItem