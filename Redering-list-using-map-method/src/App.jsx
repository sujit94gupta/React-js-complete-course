import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MapMethod() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <>
      <h1>Rendering List Using Map Method</h1>
      <br></br>
      <h3>Simple Array of String</h3>
      <ul class="list-group">
        {fruits.map((fruit, index) => (
          <li class="list-group-item" key={index}>
            {fruit}
          </li>
        ))}
      </ul>
      <br></br>
      <ArrayOfObjects />
      <br />
      <CustomComponentWithMap />
    </>
  )
}
export default MapMethod


export function ArrayOfObjects() {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' }
  ];

  return (
    <>
      <h3>Rendering Array of Objects</h3>
      <ul class="list-group">
        {users.map(user => (
          <li class="list-group-item" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}


export function CustomComponentWithMap() {

  function UserCard({ name }) {
    return <p>Hello, {name}</p>;
  }

  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  return (
    <div>
      <h3>Custom Component With Map</h3>
      <ul class="list-group">
        <li class="list-group-item">{names.map((n, i) => (
          <UserCard key={i} name={n} />
        ))}</li>
      </ul>
    </div>
  );

}
