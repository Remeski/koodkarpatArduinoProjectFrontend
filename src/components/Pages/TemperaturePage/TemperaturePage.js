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

import Dates from './Dates'

const TemperaturePage = () => {
  const [temperatureData, setTempData] = useState()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const colors = [
    '#FF6633',
    '#FFB399',
    '#FFFF99',
    '#99FF99',
    '#E6331A',
    '#33FFCC',
    '#991AFF',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ]

  useEffect(() => {
    axios
      .get('http://koodikarpatarduino.herokuapp.com/temperature')
      //.get('http://localhost:5000'.concat('/temperature'))
      .then(res => {
        setTempData(res.data)
      })
  }, [])

  useEffect(() => {
    if (temperatureData !== undefined) {
      const startIndex = temperatureData.data.findIndex(elem => {
        const elemDate = new Date(elem.date)
        return (
          elemDate.getFullYear() === startDate.getFullYear() &&
          elemDate.getMonth() === startDate.getMonth() &&
          elemDate.getDay() === startDate.getDay()
        )
      })

      console.log(startIndex)
      console.log(temperatureData.data.slice(startIndex))
    }
  }, [startDate, endDate, temperatureData])

  const handleStart = newDate => {
    setStartDate(newDate)
  }

  const handleEnd = newDate => {
    setEndDate(newDate)
  }

  return (
    <>
      {temperatureData ? (
        <ResponsiveContainer>
          <LineChart
            width={0}
            height={0}
            data={temperatureData.data}
            stroke='#ccc'>
            <CartesianGrid stroke='#ccc' strokeDashArray='4 1 2' />
            <XAxis dataKey='date' stroke='#fff' />
            <YAxis unit='°C' domain={['dataMin', 'dataMax']} stroke='#fff' />
            <Tooltip />
            {temperatureData.allsensors.map((elem, id) => (
              <Line
                key={id}
                type='monotone'
                dataKey={elem}
                stroke={colors[id]}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading...</p>
      )}
      {/*<Dates
        startDate={startDate}
        endDate={endDate}
        handleStart={handleStart}
        handleEnd={handleEnd}
      />*/}
    </>
  )
}

export default TemperaturePage
