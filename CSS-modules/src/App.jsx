import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CSS Module</h1>
      <button className={{ style: 'color: red' }}>CSS Module</button>

      <br />
      <h3>Advance Multiple Classes</h3>
      <button className={`${styles.btn} ${styles.box}`}>CSS Module</button>
    </>
  )
}

export default App
