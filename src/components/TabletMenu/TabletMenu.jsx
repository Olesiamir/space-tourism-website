import TabletMenuItem from "./components/TabletMenuItem"
import { navItems } from "../navItems"
import { useLocation } from "react-router-dom"


const TabletMenu = () => {
  const location = useLocation()
  return (
    <div className="w-[450px] h-24 bg-[#24252E] hidden md:inline-block lg:hidden">
      <nav className="h-full">
        <ul className="flex items-center justify-around h-full">
          {navItems.map(item => (
            <li className={`${location.pathname === item.to ? 'border-b-white' : ''} flex items-center h-full box-border border-b-2 active:border-b-white hover:border-b-2 hover:border-b-[#979797] border-transparent`} key={item.id}><TabletMenuItem item={item}/></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default TabletMenu