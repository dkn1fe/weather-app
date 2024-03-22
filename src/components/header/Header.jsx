import {useState} from 'react'
import headerLogo from '../../assets/header/header-logo.jpg'
import HeaderSearch from './header-search/HeaderSearch'
import MetricButtons from './metricButton/MetricButtons'
import search from '../../assets/header/search.svg'
import './Header.scss'


const Header = () => {
   const [isOpenMobile, setIsOpenMobile] = useState(false)
   const  handleToggleMenu = () => setIsOpenMobile(!isOpenMobile)
   const isMobileOpen = isOpenMobile ? 'hide' : ' '
    return ( 
        <>
           <div className="header-wrapper">
             <div className={`header-logo ${isMobileOpen} `}>
                 <img src = {headerLogo}></img>
                 <p>Weather <span>App</span></p>
                 <img onClick={handleToggleMenu} className='search-button' src = {search} alt = 'search'/>
             </div>
             <div className='header-search'>
             <HeaderSearch isOpenMobile = {isOpenMobile} setIsOpenMobile = {setIsOpenMobile}/>
             </div>
             <div className={`metric-btns ${isMobileOpen}`}>
                <MetricButtons/>
             </div>
           </div>
        </>
    )
}

export default Header