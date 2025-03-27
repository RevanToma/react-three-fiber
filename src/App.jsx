import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo } from 'react'
import { Stats, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import Polyhedron from './components/Polyhedron'

// export default function App() {
//   const polyhedron = [
//     new THREE.BoxGeometry(),
//     new THREE.SphereGeometry(0.785398),
//     new THREE.DodecahedronGeometry(0.785398)
//   ]

//   const color = useControls({ value: 'green' })
//   return (
//     <Canvas camera={{ position: [0, 0, 2] }}>
//       <color attach="background" args={[color.value]} />
//       <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
//       <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
//       <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
//       <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
//       <Stats />
//       <OrbitControls />
//       <axesHelper args={[5]} />
//       {/* <gridHelper args={[20, 20, 0xff0000, 'teal']} rotation-x={Math.PI / 4} /> */}
//       <gridHelper />
//     </Canvas>
//   )
// }

// export default function App() {
//   const polyhedron = useMemo(
//     () => [
//       new THREE.BoxGeometry(),
//       new THREE.SphereGeometry(0.785398),
//       new THREE.DodecahedronGeometry(0.785398)
//     ],
//     []
//   )

//   const options = useMemo(() => {
//     return {
//       x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//       y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//       z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//       visible: true,
//       color: { value: 'lime' }
//     }
//   }, [])

//   const pA = useControls('Polyhedron A', options)
//   const pB = useControls('Polyhedron B', options)

//   return (
//     <Canvas camera={{ position: [1, 2, 3] }}>
//       <Polyhedron
//         position={[-1, 1, 0]}
//         rotation={[pA.x, pA.y, pA.z]}
//         visible={pA.visible}
//         color={pA.color}
//         polyhedron={polyhedron}
//       />
//       <Polyhedron
//         position={[1, 1, 0]}
//         rotation={[pB.x, pB.y, pB.z]}
//         visible={pB.visible}
//         color={pB.color}
//         polyhedron={polyhedron}
//       />
//       <OrbitControls target-y={1} />
//       <axesHelper args={[5]} />
//       <gridHelper />
//       <Stats />
//     </Canvas>
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

export default function App() {
  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }}>
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial()}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial()}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}
