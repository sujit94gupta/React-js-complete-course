import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName.jsx'
import AddTodo from './components/AddTodo.jsx';
import TudoItems from './components/TodoItems.jsx';
import styles1 from './components/AddTodo.module.css';
function App() {
  const [count, setCount] = useState(0)

  const todoItem = [
    {
      name: "Go to Gym",
      date: "12/12/2025"
    },

    {
      name: "Buy Groceries",
      date: "13/12/2025"
    },

    {
      name: "Read Book",
      date: "14/12/2025"
    }];

  return (
    <>
      <center className={styles1.todoContainer}>
        <AppName />
        <div className="container text-center">
          <AddTodo />
          <TudoItems todoItem={todoItem} />
        </div>
      </center >
    </>
  )
}

export default App
