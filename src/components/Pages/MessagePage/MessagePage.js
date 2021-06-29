import React, { useState } from 'react'

import styles from './MessagePage.module.css'

import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css'

const MessagePage = () => {
  const [text, setText] = useState('')
  const [prevTextLength, setPrevTextLength] = useState(0)

  const [color, setColor] = useColor('hex', '#121212')

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
    console.log(text, color.hex)
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form}>
        <label className={styles.messageLabel}>
          Send a new message to display:
        </label>
        <div className={styles.messageField}>
          <input
            type='text'
            id='message'
            onChange={textChange}
            value={text}
            placeholder='Your message (two rows with five characters)'
          />
          <ColorPicker
            width={500}
            height={228}
            color={color}
            onChange={setColor}
            hideHSV
            hideRGB
            dark
          />
          <button onClick={send} type='submit'>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessagePage
