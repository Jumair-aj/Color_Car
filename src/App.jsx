import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car'
import { useGLTF } from '@react-three/drei'

function App() {
  const [color, setColor] = useState('')

  const {  materials } = useGLTF('/scene.gltf')

  const randomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
  useLayoutEffect(() => {
    materials.McLaren_F1_1993_By_Alex_Ka.color.set(color)
  }, [color])

  return (
    <div className="container">
      <Car/>
      <div className='inputDiv'>
        <label>Type the Color:</label>
        <div>

      <input type='text' onChange={e=>setColor(e.target.value)}/>
      <span onClick={()=>setColor(randomColor)}>Generate Random</span>
        </div>
      </div>
    </div>
  )
}

export default App
