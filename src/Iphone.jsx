
import React, { Suspense } from 'react'
import { Model } from './Scene2'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Iphone = () => {
  return (
    <div id='modelCar'>
        <Canvas>
            {/* <ambientLight/> */}
            {/* <spotLight position={[3,5,4]} intensity={1}/> */}
            {/* <directionalLight color="yellow" position={[0, 0, 5]} /> */}
            <Environment  near={100} far={1000} resolution={2560} blur={0} preset='sunset'/>

            <Suspense fallback={null}>
                <Model/>
                <OrbitControls/>
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Iphone
