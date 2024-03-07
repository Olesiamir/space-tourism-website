import { Link } from "react-router-dom"

const TabletMenuItem = ({item}) => {
  return (
    <Link to={item.to} className='font-barlow-condensed uppercase h-[31px] text-xs text-white font-light block'>
      {item.title}
    </Link>
  )
}
export default TabletMenuItem