import React from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { registerLocale } from 'react-datepicker'
import fi from 'date-fns/locale/fi'
registerLocale('fi', fi)

const Dates = ({ startDate, endDate, handleStart, handleEnd }) => {
  return (
    <>
      <DatePicker locale='fi' selected={startDate} onChange={handleStart} />
      <DatePicker locale='fi' selected={endDate} onChange={handleEnd} />
    </>
  )
}

export default Dates
