import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function Dodecahedron({ time, content, ...props }) {
  return (
    <mesh {...props}>
      <dodecahedronGeometry />
      <meshStandardMaterial roughness={0.75} emissive="#404057" />
      <Html distanceFactor={10}>
        <div className="content">{content}</div>
      </Html>
    </mesh>
  )
}

function Content() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))
  return (
    <group ref={ref}>
      <Dodecahedron position={[-8, 0, 0]} content={'VAE'} />
      <Dodecahedron position={[-5, 0, 0]} content={'GAN'} />
      <Dodecahedron position={[-2, 0, 0]} content={'Stable Diffusion'} />
    </group>
  )
}

function Animation() {
  return (
    <Canvas camera={{ position: [2, 0, 7.5] }}>
      <pointLight color="indianred" />
      <pointLight position={[10, 10, -10]} color="orange" />
      <pointLight position={[-10, -10, 10]} color="lightblue" />
      <Content />
    </Canvas>
  )
}
export default Animation
