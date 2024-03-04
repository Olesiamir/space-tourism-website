import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
//images
import logo from '/assets/shared/logo.svg'
import burger from '/assets/shared/icon-hamburger.svg'
import close from '/assets/shared/icon-close.svg'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import TabletMenu from '../components/TabletMenu/TabletMenu'

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className='header absolute w-full p-6 md:p-0 md:pl-10 flex justify-between items-center'>
        <div className="logo w-10 md:w-[48px]">
          <img src={logo} alt="logo"/>
        </div>
        <div className="burger md:hidden" >
          <img src={burger} alt="burger" onClick={() => setMenuOpen(true)} className={`${menuOpen ? 'hidden' : ''}`}/>
          <img src={close} alt="close burger" onClick={() => setMenuOpen(false)} className={`${menuOpen ? '' : 'hidden'} relative z-10`}/>          
        </div>
        <TabletMenu />
      </header>
      <MobileMenu isOpen={menuOpen} /> 
      <Outlet />
    </>
  )
}
export default RootLayout