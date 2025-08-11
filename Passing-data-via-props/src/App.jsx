import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const info = [{ name: "Sujit Gupta", age: 25 }, { name: "John Doe", age: 30 }];

  return (
    <>
      <h1>Passing Data via Props</h1>
      <h3>Pass Data Basic and Array</h3>
      <Student name={"Sujit Gupta"} age={25} info={info} />
      <br />
      <h3>Pass Destructring Props</h3>
      <Student2 name={"John Doe"} age={30} info={info} />
      <br />
      <h3>Function as Props (Advance)</h3>
      <Student3 handleClick={() => alert("Clicked")} />
      <br />
      <h3>Looping and Passing Props</h3>
      {info.map((student, index) => (
        <Student4 key={index} name={student.name} age={student.age} />
      ))}
    </>
  )
}

export default App


function Student(props) {
  return (
    <>
      <p>Student Name: {props.name}</p>
      <p>Student Age: {props.age}</p>
      {props.info.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </>
  );
}


function Student2({ name, age, info }) {
  return (
    <>
      <p>Student Name: {name}</p>
      <p>Student Age: {age}</p>
      {info.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </>
  );
}

function Student3({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}



function Student4({ name, age }) {
  return (
    <>
      <p>Student Name: {name}</p>
      <p>Student Age: {age}</p>
    </>
  );
}