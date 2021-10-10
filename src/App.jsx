import { useState } from 'react'
import logo from '../assets/img/logo.png'
import windows95 from '../assets/img/windows95.png'
import './App.scss'
import "98.css";
import '../assets/index.scss'

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import About from '../components/About'
import GenderItem from '../components/GenderItem'
import ConnectButton from '../components/Web3/ConnectButton'

function App () {

  const getLibrary = (provider) => {
    return new Web3Provider(provider);
  };

  const gendersList = [1, 2, 3, 4, 5].map((id) =>
    <li key={id}>
      <GenderItem />
    </li>)

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="app">
        <div className="container">
          <header className="app-header">
            <img src={logo} alt="logo" className="logo" />
          </header>
          <About />
          <div className="mt-2 text-center">
             <ConnectButton />
          </div>
          <ul className="genders-grid mt-3">
            {gendersList}
          </ul>
        </div>
        <footer className="footer window">
          <button className="windows-start"> <img src={windows95} alt="windows start" /> Start</button>
        </footer>
      </div>
    </Web3ReactProvider>
  )
}

export default App
