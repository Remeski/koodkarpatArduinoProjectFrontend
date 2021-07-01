import React, { useEffect } from 'react'

import styles from './Alert.module.css'

const Alert = ({ duration, alert, clearAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      clearAlert()
    }, duration)
  })

  return <>{alert ? <div className={styles.alert}>{alert}</div> : null}</>
}

export default Alert
