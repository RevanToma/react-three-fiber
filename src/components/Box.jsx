import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect, useMemo } from 'react'
import * as THREE from 'three'

// export default function Box(props) {
//   const ref = useRef({}),
//     [hovered, setHover] = useState(false),
//     [rotate, setRotate] = useState(false)

//   useFrame((state, delta) => {
//     if (rotate) {
//       ref.current.rotation.x += 1 * delta
//       ref.current.rotation.y += 0.5 * delta
//     }

//     // ref.current.position.y = Math.sin(state.clock.getElapsedTime())
//   })

//   console.log(ref)
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
//       onPointerDown={() => setRotate(!rotate)}
//       // onPointerUp={(e) => console.log('pointer up ', e)}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//       onUpdate={(self) => console.log(self)}>
//       <boxGeometry />
//       <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
//     </mesh>
//   )
// }

export default function Box(props) {
  const ref = useRef(),
    [rotate, setRotate] = useState(false),
    [count, setCount] = useState(0),
    geometry = useMemo(
      () => [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.785398)
      ],
      []
    )

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  })

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      // onPointerDown={() => setRotate(!rotate)}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}>
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  )
}
