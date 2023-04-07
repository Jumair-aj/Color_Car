import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car'
import { useGLTF } from '@react-three/drei'
import Iphone from './Iphone'

function App() {
  const [color, setColor] = useState('')
  const [selectedItem, setSelectedItem] = useState('')

  const { materials } = useGLTF('/scene.gltf')
  const material = useGLTF('/Iphone/scene.gltf')
console.log(material)
  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
  }
  const randomNumber = () => {
    return  Math.floor(Math.random() * 200);
  }

  const alertFn = ()=>{
    alert (" It's Coming Soon..💃");  
  }
  useLayoutEffect(() => {
    materials.McLaren_F1_1993_By_Alex_Ka.color.set(color)
    material.materials.Body.color.set(color)
    material.materials.Frame.color.set(color)
  }, [color])

  useEffect(() => {
    
    document.getElementById("comingSoon").addEventListener("mouseover", () => {
      document.getElementById("comingSoon").style.transform = `translate(${randomNumber()}%, ${randomNumber()}%)`
    });
 
  }, [])
  

  return (
    <div className="container">
      {!selectedItem && <div className='selectDiv'>
        <p>Choose :</p>
        <div onClick={() => setSelectedItem('iphone')}><p>Iphone</p></div>
        <div onClick={() => setSelectedItem('car')}><p>Car</p></div>
        <div id='comingSoon' onClick={alertFn}><p>Coming Soon..</p></div>
      </div>}
      {selectedItem && <>
        {selectedItem === 'car' ? <Car /> : <Iphone />}
      <div className='inputDiv'>
        <label>Type the Color:</label>
        <div>

          <input type='text' onChange={e => setColor(e.target.value)} />
          <span onClick={() => setColor(randomColor)}>Generate Random</span>
        </div>
      </div>
      </>}
    </div>
  )
}

export default App
