import { useState } from 'react'
import logo from '../assets/img/logo.png'
import windows95 from '../assets/img/windows95.png'
import './App.scss'
import "98.css";
import '../assets/index.scss'

import About from '../components/About'
import GenderItem from '../components/GenderItem'


function App () {
  const [count, setCount] = useState(0)

  const gendersList = [1, 2, 3, 4, 5].map((id) =>
    <li key={id}>
      <GenderItem />
    </li>)

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <img src={logo} alt="logo" className="logo" />
        </header>
        <About />
        <ul className="genders-grid mt-5">
          {gendersList}
        </ul>
      </div>
      <footer className="footer window">
        <button className="windows-start"> <img src={windows95} alt="windows start" /> Start</button>
      </footer>
    </div>
  )
}

export default App
