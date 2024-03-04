import MobileMenuItem from './components/MobileMenuItem'

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

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`${isOpen ? 'opacity-100 right-0' : 'opacity-0 right-[-254px]'} transition-all duration-500 py-6 absolute w-[254px] backdrop-blur-2xl  h-full text-sm uppercase md:hidden`}>
      
      <nav>
        <ul className='mt-24 ml-8'>
          {navItems.map(item => (
            <li key={item.id} className='mb-2.5'>
              <MobileMenuItem item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default MobileMenu
