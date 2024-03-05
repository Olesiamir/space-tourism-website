import { navItems } from "../navItems"
import DesktopMenuItem from "./components/DesktopMenuItem"

const DesktopMenu = () => {
  return (
    <div className="w-[830px] h-24 bg-white bg-opacity-5 hidden md:hidden lg:inline-block lg:backdrop-blur-xl">
      <nav className="h-full">
        <ul className="flex items-center justify-around h-full">
          <li><hr className="absolute w-[473px] h-px border-[#979797] translate-x-[-500px]"/></li>
          {navItems.map(item => (
            <li className='flex items-center h-full box-border border-b-2 active:border-b-white border-transparent' key={item.id}><DesktopMenuItem item={item}/></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopMenu