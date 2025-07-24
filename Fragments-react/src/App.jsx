import React, { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function DivFragment() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Div Wrap Fragment</h3>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">An active item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
      </ul>
      <ShortFragment />
      <ReactFragment />
      <WithoutFragment />
    </div>
  );
}

export function ShortFragment() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Short Syntax</h3>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">An active item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
      </ul>
    </>
  );
}

export function ReactFragment() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <h3>React Fragment Use</h3>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">An active item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
      </ul>
    </Fragment>
  );
}



export function WithoutFragment() {
  const [count, setCount] = useState(0)

  return (
    <h3>Without Fragment</h3>
  );
}