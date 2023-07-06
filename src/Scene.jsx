/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: ᗩᒪE᙭. Kᗩ.🚗 (https://sketchfab.com/Alex.Ka.)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/mclaren-f1-1993-by-alexka-294df724d96241cdbe0e0f3c91ad7fce
Title: McLaren F1 1993 By Alex.Ka.🤍🖤
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  let camera = useThree(state => state.camera)
  let scene = useThree(state => state.scene)

  console.log(scene)
  useLayoutEffect(() => {
    scene.rotation.set(0.6,4.8,0)
    // camera.position.set(0,0,6)
    gsap.fromTo(camera.position,{x:0,y:0,z:14},{x:0,y:0,z:5,duration:2,ease:'power1.out'},"id" )
    // gsap.fromTo(scene.rotation,{x:0,y:-4,z:0},{x:0,y:0,z:0,duration:1.2} )
    gsap.to(scene.rotation,{x:0.6,y:5.2,z:0,duration:2,ease:"power1.out"} ,"id")
    gsap.to(scene.rotation,{x:0.2,y:5.9,z:0,duration:2,ease:"power1.inOut"},'key' )
    gsap.fromTo(camera.position,{x:0,y:0,z:5},{x:0,y:0,z:3.7,duration:2,ease:"power1.inOut"},'key' )
  }, [])
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.08}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.F1_front_plastic} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.F1_nip_logo} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.F1_red_F} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.F1_red_R} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.F1_side} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.McLAREN_RED_LINE} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.McLAREN_sidelogo} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.McLAREN_sidelogo_FBUMPER} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.McLaren_F1_1993_By_Alex_Ka} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.McLaren_logo} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.McLaren_supportlogo} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.black_aluminium} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.black_chrome} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.black_chrome2} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.black_matte} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.bottom} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.brakedisk} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.brakelight} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.bronze} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.chrome2} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.door_stitch} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.engine} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.exhaust} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.exhaust_gold} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.exhaust_hole} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.exhaust_metal_circles} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.floor} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.front_turn_signal} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.fuel_clap} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.grill1} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.grill2} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.grill_3} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.grill_f} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.grill_side} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.headlight_1} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.headlight_2} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.headlightglass} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.interior} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.mirrors} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.material_42} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.material_43} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.plate_F} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.plate_R} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.rear_lamp} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.rear_turn_signal} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.material_48} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.rimbolt} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.rimlogo} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.side_turn_signal} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.suport} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.tire} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.tire_side} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.windo_F} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.windo_R} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.windo_S} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
