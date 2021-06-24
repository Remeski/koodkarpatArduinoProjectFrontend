import React, { useState, useRef, useEffect } from 'react'

import styles from './Navbar.module.css'
import NavbarMenu from './NavbarMenu/NavbarMenu'
import Hamburger from './Hamburger/Hamburger'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const navRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <>
      <nav ref={navRef} className={styles.nav}>
        <div className={styles.name}>
          Some<span className={styles.dash}>-</span>cool
          <span className={styles.dash}>-</span>name
        </div>
        <Hamburger clicked={toggleMenu} open={isMenuOpen} />
      </nav>
      <NavbarMenu menuRef={menuRef} isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  )
}

export default Navbar
