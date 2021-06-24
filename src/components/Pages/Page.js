import styles from './Page.module.css'

import React from 'react'

const Page = ({ header, children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Page
