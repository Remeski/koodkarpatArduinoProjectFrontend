import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import TemperaturePage from './components/Pages/TemperaturePage/TemperaturePage'
import Config from './components/Pages/ConfigPage/ConfigPage'

const App = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.glassPane}>
        <Router>
          <Navbar />
          <Switch>
            <Redirect exact from='/' to='/temperature' />
            <Route path='/temperature'>
              <TemperaturePage />
            </Route>
            <Route path='/config'>
              <Config />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
