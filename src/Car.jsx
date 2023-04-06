import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Model } from './Scene'
import { OrbitControls } from '@react-three/drei'

const Car = () => {
  return (
    <div id='modelCar'>
        <Canvas>
            <ambientLight/>
            <spotLight position={[0,10,2]}/>
            <Suspense fallback={null}>
                <Model/>
                <OrbitControls minPolarAngle={Math.PI / 2} enableZoom={false} maxPolarAngle={Math.PI / 2}/>
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Car