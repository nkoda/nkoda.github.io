import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
class App extends Component {
    render() {
      return (
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      )
    }
  }

export default App