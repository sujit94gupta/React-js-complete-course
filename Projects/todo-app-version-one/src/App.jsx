import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName.jsx'
import AddTudo from './components/AddTudo.jsx';
import TudoItem1 from './components/TudoItem1.jsx';
import TudoItem2 from './components/TudoItem2.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center class="todo-container">
        <AppName />
        <div class="container text-center">
          <AddTudo />
          <div class="item-container">
            <TudoItem1 />
            <TudoItem2 />
          </div>
        </div>
      </center>
    </>
  )
}

export default App
