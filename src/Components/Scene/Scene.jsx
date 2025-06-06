import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html, useProgress } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function Model(props) {

  const ref = useRef(null)
  const { scene } = useGLTF('/model/skip-v1.glb')
    useFrame(() => {
   
      ref.current.rotation.y += 0.006;
 });
  return <primitive ref={ref} object={scene} {...props} />
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#fff' }}>{progress.toFixed(0)}% loaded</span>
    </Html>
  )
}



function Scene() {
  return ( <div style={{ width: '100vw', height: '60vh',zIndex:-1,position:"absolute" }}>
    <Canvas camera={{ position: [700, 50, -25], fov: 45 }} >
      <Suspense fallback={<Loader />}>
        <Model  />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
        </div>

  )
}

export default Scene