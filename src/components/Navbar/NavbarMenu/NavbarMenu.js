import styles from './NavbarMenu.module.css'

import React from 'react'
import NavbarLinks from './NavbarLinks/NavbarLinks'

const NavbarMenu = ({ menuRef, closeMenu, isOpen }) => {
  const classes = [styles.NavbarMenu]

  if (isOpen) {
    classes.push(styles.open)
  }

  return (
    <div ref={menuRef} className={classes.join(' ')}>
      <NavbarLinks closeMenu={closeMenu} />
    </div>
  )
}

export default NavbarMenu
