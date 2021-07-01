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
          <Navbar pages={pages} />
          <Switch>
            {/*<Redirect exact from='/' to='/temperature' />
            <Route path='/temperature'>
              <TemperaturePage />
            </Route>
            <Route path='/message'>
              <MessagePage />
  </Route>*/}
            {renderPages}
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
