import React, { useState } from 'react'

export default function App() {
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)
  function handleX(e) {
    setx(e.target.value)
  }
  function handleY(e) {
    sety(e.target.value)

  }
  return (
    <div>
      X: <input type='number' value={x} onChange={handleX} /> <br />
      Y: <input type='number' value={y} onChange={handleY} /><br />
      <h1>X Value is : {x}</h1>
      <h1>Y Value is : {y}</h1>
      <h2>Addition : {Number(x) + Number(y)}</h2>
      <h2>Substraction : {Number(x) - Number(y)}</h2>
      <h2>Multiplication : {Number(x) * Number(y)}</h2>
      <h2>Division : {Number(x) / Number(y)}</h2>

      <hr />
    </div>
  )
}
