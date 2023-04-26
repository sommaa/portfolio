/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 molecule.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/molecule.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="molecule" position={[0.29, -2.41, -0.07]} rotation={[1.45, 0, -Math.PI / 2]} scale={0.16}>
          <mesh name="molecule_1" geometry={nodes.molecule_1.geometry} material={materials.MA_Carbon} />
          <mesh name="molecule_2" geometry={nodes.molecule_2.geometry} material={materials.MA_Hydrogen} />
          <mesh name="molecule_3" geometry={nodes.molecule_3.geometry} material={materials.MA_Carbon_001} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/molecule.glb')