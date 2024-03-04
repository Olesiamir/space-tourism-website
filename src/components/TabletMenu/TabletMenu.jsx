import TabletMenuItem from "./components/TabletMenuItem"

const navItems = [
  {
    id: '00',
    title: 'Home',
    to: '/',
  }, 
  {
    id: '01',
    title: 'Destination',
    to: '/',
  }, 
  {
    id: '02',
    title: 'Crew',
    to: '/',
  }, 
  {
    id: '03',
    title: 'Technology',
    to: '/',
  }, 
]

const TabletMenu = () => {
  return (
    <div className="w-[450px] h-24 bg-white bg-opacity-5 hidden md:inline-block">
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