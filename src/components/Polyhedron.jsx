import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
// export default function Polyhedron({ position, polyhedron }) {
//   const ref = useRef()
//   const [count, setCount] = useState(0)

//   console.log(polyhedron)

//   useFrame((_, delta) => {
//     ref.current.rotation.x += delta
//     ref.current.rotation.y += 0.5 * delta
//   })

//   return (
//     <mesh
//       position={position}
//       ref={ref}
//       onPointerDown={() => {
//         setCount((count + 1) % 3)
//       }}
//       geometry={polyhedron[count]}>
//       <meshBasicMaterial color={'lime'} wireframe />
//     </mesh>
//   )
// }
// export default function Polyhedron({ polyhedron, color, ...props }) {
//   const ref = useRef()
//   const [count, setCount] = useState(2)

//   console.log(polyhedron[count].uuid)

//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       onPointerDown={() => {
//         setCount((count + 1) % 3)
//       }}
//       geometry={polyhedron[count]}>
//       <meshBasicMaterial color={color} wireframe />
//     </mesh>
//   )
// }

// export default function App() {
//   return (
//     <Canvas camera={{ position: [-1, 4, 2.5] }}>
//       <directionalLight position={[1, 1, 1]} />
//       <Polyhedron
//         name="meshBasicMaterial"
//         position={[-3, 1, 0]}
//         material={new THREE.MeshBasicMaterial()}
//       />
//       <Polyhedron
//         name="meshNormalMaterial"
//         position={[-1, 1, 0]}
//         material={new THREE.MeshNormalMaterial()}
//       />
//       <Polyhedron
//         name="meshPhongMaterial"
//         position={[1, 1, 0]}
//         material={new THREE.MeshPhongMaterial()}
//       />
//       <Polyhedron
//         name="meshStandardMaterial"
//         position={[3, 1, 0]}
//         material={new THREE.MeshStandardMaterial()}
//       />
//       <OrbitControls target-y={1} />
//       <axesHelper args={[5]} />
//       <gridHelper />
//       <Stats />
//     </Canvas>
//   )
// }

export default function Polyhedron(props) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta
    ref.current.rotation.y += 0.05 * delta
  })

  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        ref.current.material.wireframe = v
      }
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        ref.current.material.flatShading = v
        ref.current.material.needsUpdate = true
      }
    },
    color: {
      value: 'lime',
      onChange: (v) => {
        ref.current.material.color = new THREE.Color(v)
      }
    }
  })

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}
