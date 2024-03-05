import TabletMenuItem from "./components/TabletMenuItem"
import { navItems } from "../navItems"


const TabletMenu = () => {
  return (
    <div className="w-[450px] h-24 bg-[#151923] hidden md:inline-block lg:hidden">
      <nav className="h-full">
        <ul className="flex items-center justify-around h-full">
          {navItems.map(item => (
            <li key={item.id}><TabletMenuItem item={item}/></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default TabletMenu