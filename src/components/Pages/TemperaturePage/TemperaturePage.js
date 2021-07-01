import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'

import styles from './TemperaturePage.module.css'
import '../styles.css'

import Dates from './Dates'
import Alert from '../../UI/Alert/Alert'

const TemperaturePage = () => {
  const [temperatureData, setTempData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [alert, setAlert] = useState()

  const lineColor = '#404040'

  useEffect(() => {
    setIsLoading(true)
    const formatDate = date => {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
    if (startDate > endDate) {
      setAlert('Invalid dates selected')
      setIsLoading(false)
      return
    }
    axios
      //.get('http://koodikarpatarduino.herokuapp.com/temperature')
      .get(
        'https://koodikarpatarduino.herokuapp.com/temperature/'.concat(
          `${formatDate(startDate)}/${formatDate(endDate)}`
        )
      )
      .then(res => {
        console.log(res.data)
        if (res.data.data.length < 1) {
          setAlert('No data found. Try selecting different dates.')
          return
        }
        if (res.data.msg) {
          setAlert(res.data.msg)
        }
        setTempData(res.data)
        setIsLoading(false)
      })
  }, [startDate, endDate])

  const handleStart = newDate => {
    setStartDate(newDate)
  }

  const handleEnd = newDate => {
    setEndDate(newDate)
  }

  const clearAlert = () => {
    setAlert()
  }

  return (
    <>
      <div className={styles.alert}>
        <Alert duration={6000} alert={alert} clearAlert={clearAlert} />
      </div>
      <div className='page'>
        <div className='pageContent'>
          <div className='headers'>
            <div className='header'>Temperature</div>
            <div className={`header ${styles.dates}`}>
              <Dates
                startDate={startDate}
                endDate={endDate}
                handleStart={handleStart}
                handleEnd={handleEnd}
              />
            </div>
          </div>
          <div className='content'>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <ResponsiveContainer>
                <LineChart
                  width={0}
                  height={0}
                  data={temperatureData.data}
                  stroke='#ccc'>
                  <CartesianGrid stroke='#ccc' strokeDashArray='4 1 2' />
                  <XAxis
                    dataKey='date'
                    stroke='#fff'
                    tickFormatter={dateTime => {
                      const date = new Date(dateTime)
                      return `${date.getDate()}-${date.getMonth() + 1}`
                    }}
                  />
                  <YAxis
                    unit='°C'
                    domain={['dataMin', 'dataMax']}
                    stroke='#fff'
                  />
                  <Tooltip />
                  {temperatureData.allsensors.map((elem, id) => (
                    <Line
                      key={id}
                      type='monotone'
                      dataKey={elem}
                      stroke={lineColor}
                      strokeWidth={2}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TemperaturePage
