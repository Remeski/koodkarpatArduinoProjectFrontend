import React, { useState } from 'react'
import axios from 'axios'

import Alert from '../../UI/Alert/Alert'

import styles from './MessagePage.module.css'

import '../styles.css'

const MessagePage = () => {
  const [text, setText] = useState('')
  const [prevTextLength, setPrevTextLength] = useState(0)
  const [color, setColor] = useState('#ffffff')

  const [isLoading, setIsLoading] = useState(false)

  const [alert, setAlert] = useState()

  const handleSetText = text => {
    setPrevTextLength(text.length)
    setText(text)
  }

  const textChange = e => {
    const text = e.target.value
    const textLength = text.length
    if (textLength > 4 && textLength <= 7) {
      if (textLength - prevTextLength < 1) {
        const newText = text.slice(0, 5)
        handleSetText(newText)
      } else {
        const newText = text.slice(0, 5) + ' - ' + text.slice(8)
        handleSetText(newText)
      }
    } else if (textLength <= 13) {
      handleSetText(text)
    }
  }

  const send = e => {
    e.preventDefault()
    setIsLoading(true)

    const rows = text.split(' - ')

    axios
      .post('https://koodikarpatarduino.herokuapp.com/messagedisplay', {
        row1: rows[0],
        row2: rows[1],
        colour: color,
      })
      .then(res => {
        setIsLoading(false)
        if (res.status === 201) {
          setText('')
          setAlert('Message was sent')
          return
        }
        setAlert('Something went wrong')
      })
      .catch(err => {
        setIsLoading(false)
        setText('')
        setAlert('Something went wrong')
      })
  }

  const clearAlert = () => {
    setAlert()
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.alert}>
        <Alert clearAlert={clearAlert} alert={alert} duration={7000} />
      </div>
      <form className={styles.form}>
        <label className={styles.messageLabel}>
          Send a new message to display:
        </label>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.messageField}>
            <div className={styles.input}>
              <input
                type='text'
                id='message'
                onChange={textChange}
                value={text}
                placeholder='Your message (two rows of five characters)'
              />

              <div className={styles.color}>
                <label className={styles.colorLabel}>Color:</label>
                <input
                  type='color'
                  value={color}
                  onChange={e => setColor(e.target.value)}></input>
              </div>
            </div>
            <button onClick={send} type='submit'>
              Send
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default MessagePage
