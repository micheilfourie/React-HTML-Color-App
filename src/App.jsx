import { useState } from 'react'
import './App.css'
import ColorContainer from './ColorContainer'
import ColorInput from './ColorInput'

function App() {

  const [color, setColor] = useState('')

  return (
    <div className='App'>
      <ColorContainer color={color} />
      <ColorInput color={color} setColor={setColor} />
    </div>
  )
}

export default App
