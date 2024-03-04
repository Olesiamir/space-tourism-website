import { Link } from "react-router-dom"

const TabletMenuItem = ({item}) => {
  return (
    <Link to={item.to} className='font-barlow-condensed h-[31px] text-xs text-white font-thin active:border-b-white active:border-b-4 block'>
      {item.title}
    </Link>
  )
}
export default TabletMenuItem