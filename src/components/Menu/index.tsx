import React  , { useState }from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import config from './config/config'
import UserMenu from './UserMenu'
import MenuToggle from '../../images/menu-bar.svg'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()
  const location = useLocation();
  const [isActive, setActive] = useState(false);

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })
  const handleToggle = () => {
    setActive(!isActive)
  };
  return (
    <div className={isDark ? 'RitzSwap-theme' : 'RitzSwap-theme'}>
      <div className={isActive ? "top-menu active" : "top-menu"}>
        <div aria-hidden="true" className="toggle-icon" onClick={() => handleToggle()} >
          <img src={MenuToggle} alt="Menu Toggle" />
        </div>

        <ul>
          <li><a className={location.pathname === '/' ? "active" : ""} href="/"><img src="/images/menu/home.svg" alt="Home icon" />Home</a></li>
          <li><a className={location.pathname === '/swap' ? "active" : ""} href="/swap"><img src="/images/menu/swap.svg" alt="Swap icon" />Swap</a></li>
          <li><a className={location.pathname === '/pools' ? "active" : ""} href="/pools"><img src="/images/menu/pools.svg" alt="Swap icon" />Pools</a></li>
          <li><a className={location.pathname === '/liquidity' ? "active" : ""} href="/liquidity"><img src="/images/menu/liquidity.svg" alt="Liquidity icon" />Liquidity</a></li>
          <li><a className={location.pathname === '/farms' ? "active" : ""} href="/farms"><img src="/images/menu/farm.svg" alt="Farm icon" />Farm</a></li>
          <li><a className={location.pathname === '/bridge' ? "active" : ""} href="https://exchange.ritzswap.com/"><img src="/images/menu/bridge.svg" alt="Bridge icon" />Bridge</a></li>
          <li><a className={location.pathname === '/analytics' ? "active" : ""} href="/#"><img src="/images/menu/more.svg" alt="More icon" /> More</a>
            <ul className="sub-menu">
              <li> <a href="https://analytics.ritzswap.com/">Analytics</a> </li>
              <li> <a href="https://docs.ritzswap.com/">Docs</a> </li>
            </ul>
          </li>
        </ul>
      </div>
      <UikitMenu
        userMenu={<UserMenu />}
        // globalMenu={<GlobalSettings />}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        // cakePriceUsd={cakePriceUsd.toNumber()}
        links={config(t)}
        subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        // footerLinks={footerLinks(t)}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        // buyCakeLabel={t('Buy CAKE')}
        {...props}
      />
    </div>
  )
}

export default Menu
