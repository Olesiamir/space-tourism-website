import {Link} from 'react-router-dom'

const MobileMenuItem = ({item}) => {
  return (
    <Link to={item.to} className='font-barlow-condensed h-[31px] text-white font-thin active:border-r-white active:border-r-4 block'>
      <span className='font-bold inline-block min-w-5 text-white mr-3'>
        {item.id}
      </span>
      {item.title}
    </Link>
  )
}
export default MobileMenuItem