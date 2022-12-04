import React, {Component} from 'react'
import Table from './Table'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
class App extends Component {
    render() {
      return (
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      )
    }
  }

export default App