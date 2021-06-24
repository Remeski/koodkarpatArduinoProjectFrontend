import styles from './Hamburger.module.css'

import React from 'react'

const Hamburger = ({ clicked, isOpen }) => {
  return (
    <div onClick={clicked} className={styles.hamburger}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}

export default Hamburger
