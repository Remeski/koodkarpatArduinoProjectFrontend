import styles from './NavbarLinks.module.css'
import NavbarLink from './NavbarLink.js/NavbarLink'

import React from 'react'

const NavbarLinks = ({ closeMenu }) => {
  return (
    <div className={styles.NavbarLinks}>
      <NavbarLink closeMenu={closeMenu} path='/temperature'>
        Temperature
      </NavbarLink>
      <NavbarLink closeMenu={closeMenu} path='/config'>
        Config
      </NavbarLink>
    </div>
  )
}

export default NavbarLinks
