import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Condition Rendering</h1>
      <h2>If - Else Constion</h2>
      <Greeting isLoggedIn={true} />
      <br />
      <h2>Ternary Operators</h2>
      <Dashboard isAdmin={false} />
      <br />
      <h2>Logical AND (&&) Operator</h2>
      <Notification hasNewMessage={true} />
      <br />
      <h2>Hide / Show Button Toggle</h2>
      <ToggleButton />

      <br /><br />
      <h2>Condition Rendering Demo</h2>
      <Demo />
    </>
  )
}

export default App


export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <p>Welcome Back!</p>;
  } else {
    return <p>Please Login</p>;
  }
}


function Dashboard(props) {
  const isAdmin = props.isAdmin;

  return (
    <div>
      {isAdmin ? (
        <p>Welcome Admin Panel</p>
      ) : (
        <p>Welcome User Dashboard</p>
      )}
    </div>
  );
}

function Notification(props) {
  return (
    <div>
      <h3>Welcome!</h3>
      {props.hasNewMessage && <p>You have a new message.</p>}
    </div>
  );
}


function ToggleButton() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show && <p>This is some detailed content!</p>}
    </div>
  );
}