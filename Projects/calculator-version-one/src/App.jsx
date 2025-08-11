import './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import React from 'react'

function App() {

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>Calculator</h1>
      <input type="text" className={styles.display}></input>
      <div className={styles.buttonsContainer}>
        <button className="btn btn-primary" id="clear">C</button>
        <button className="btn btn-primary" id="divide">/</button>
        <button className="btn btn-primary" id="multiply">*</button>
        <button className="btn btn-primary" id="subtract">-</button>
        <button className="btn btn-primary" id="add">+</button>
        <button className="btn btn-primary" id="equals">=</button>
        <button className="btn btn-primary" id="decimal">.</button>
        <button className="btn btn-primary" id="zero">0</button>
        <button className="btn btn-primary" id="one">1</button>
        <button className="btn btn-primary" id="two">2</button>
        <button className="btn btn-primary" id="three">3</button>
        <button className="btn btn-primary" id="four">4</button>
        <button className="btn btn-primary" id="five">5</button>
        <button className="btn btn-primary" id="six">6</button>
        <button className="btn btn-primary" id="seven">7</button>
        <button className="btn btn-primary" id="eight">8</button>
        <button className="btn btn-primary" id="nine">9</button>
      </div>
    </div>
  )
}

export default App
