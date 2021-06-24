import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

import Page from '../Page'

const TemperaturePage = () => {
  const [temperatureData, setTempData] = useState()

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
      //.get('http://koodikarpatarduino.herokuapp.com/temperature')
      .get('http://localhost:5000/temperature')
      .then(res => {
        setTempData(res.data)
      })
  }, [])

  return (
    <Page header='Temperature'>
      {temperatureData ? (
        <ResponsiveContainer>
          <LineChart
            width={1500}
            height={500}
            data={temperatureData.data}
            stroke='#ccc'>
            <CartesianGrid stroke='#ccc' strokeDashArray='4 1 2' />
            <XAxis dataKey='date' stroke='#fff' />
            <YAxis unit='°C' domain={['dataMin', 'dataMax']} stroke='#fff' />
            <Tooltip />
            <Legend />
            {temperatureData.allsensors.map((elem, id) => (
              <Line
                key={id}
                type='monotone'
                dataKey={elem}
                stroke={colors[Math.floor(Math.random() * colors.length)]}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading...</p>
      )}
    </Page>
  )
}

export default TemperaturePage
