import styles from './NavbarLinks.module.css'
import NavbarLink from './NavbarLink.js/NavbarLink'

import React from 'react'

const NavbarLinks = ({ links, closeMenu }) => {
  const renderLinks = links.map(link => (
    <NavbarLink key={link.path} closeMenu={closeMenu} path={link.path}>
      {link.name}
    </NavbarLink>
  ))
  return <div className={styles.NavbarLinks}>{renderLinks}</div>
}

export default NavbarLinks
