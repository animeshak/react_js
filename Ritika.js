import React, {useState} from 'react'

export default function Ritika() {
  const [name, setName] = useState('Ani')

  const getName = () =>{
      console.log("Called")
  }
  return (
    <div>
      <h1>Hiii {name}</h1>
      <button onClick={() => getName()}>Submit</button>
    </div>
  )
}
