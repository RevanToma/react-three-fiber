import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Box(props) {
  const ref = useRef({})

  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta

    // ref.current.position.y = Math.sin(state.clock.getElapsedTime())
  })

  console.log(ref)
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={(e) => console.log('pointer down', e)}
      onPointerUp={(e) => console.log('pointer up ', e)}
      onPointerOver={(e) => console.log('pointer over ' + e.object.name)}
      onPointerOut={(e) => console.log('pointer out ' + e.object.name)}
      onUpdate={(self) => console.log(self)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}
