import styles from './NavbarLink.module.css'

import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

const NavbarLink = ({ closeMenu, path, children }) => {
  const history = useHistory()

  const handleClick = () => {
    closeMenu()
    history.push(path)
  }

  return (
    <div onClick={handleClick} className={styles.link}>
      <span className={styles.dash} />
      <p>{children}</p>
    </div>
  )
}

export default withRouter(NavbarLink)
