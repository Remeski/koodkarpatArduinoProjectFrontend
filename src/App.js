import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import TemperaturePage from './components/Pages/TemperaturePage/TemperaturePage'
// import Config from './components/Pages/ConfigPage/ConfigPage'
import MessagePage from './components/Pages/MessagePage/MessagePage'

const App = () => {
  const pages = [
    {
      name: 'Temperature',
      path: '/temperature',
      component: TemperaturePage,
    },
    {
      name: 'Message',
      path: '/message',
      component: MessagePage,
    },
  ]

  const renderPages = pages.map(page => (
    <Route key={page.path} path={page.path}>
      <page.component />
    </Route>
  ))

  return (
    <div className={styles.bg}>
      <div className={styles.glassPane}>
        <Router>
          <Navbar homepage='/' pages={pages} />
          <Switch>
            <Route path='/' exact>
              <h3>
                Hello, this is a very awesome frontend. Yes, but please dont
                come here with a mobile phone (or resize the screen). It dont
                work, okay?
              </h3>
              <p>
                Just go take a look at the weather or the temperature to be more
                precise.
              </p>
            </Route>
            {renderPages}
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
