import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats, OrbitControls, Circle, Sphere } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import Polyhedron from './components/Polyhedron'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { Environment } from '@react-three/drei'
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

function Lights() {
  const ambientRef = useRef()
  const directionalRef = useRef()
  const pointRef = useRef()
  const spotRef = useRef()

  useControls('Ambient Light', {
    visible: {
      value: false,
      onChange: (v) => {
        ambientRef.current.visible = v
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v)
      }
    }
  })

  useControls('Directional Light', {
    visible: {
      value: true,
      onChange: (v) => {
        directionalRef.current.visible = v
      }
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        directionalRef.current.position.copy(v)
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        directionalRef.current.color = new THREE.Color(v)
      }
    }
  })

  useControls('Point Light', {
    visible: {
      value: false,
      onChange: (v) => {
        pointRef.current.visible = v
      }
    },
    position: {
      x: 2,
      y: 0,
      z: 0,
      onChange: (v) => {
        pointRef.current.position.copy(v)
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        pointRef.current.color = new THREE.Color(v)
      }
    }
  })

  useControls('Spot Light', {
    visible: {
      value: false,
      onChange: (v) => {
        spotRef.current.visible = v
      }
    },
    position: {
      x: 3,
      y: 2.5,
      z: 1,
      onChange: (v) => {
        spotRef.current.position.copy(v)
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        spotRef.current.color = new THREE.Color(v)
      }
    }
  })

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef} />
    </>
  )
}

// export default function App() {
//   const texture = useLoader(THREE.TextureLoader, './images/grid.png')

//   return (
//     <Canvas camera={{ position: [4, 4, 1.5] }}>
//       <Lights />
//       <Polyhedron
//         name="meshBasicMaterial"
//         position={[-3, 1, 0]}
//         material={
//           new THREE.MeshBasicMaterial({
//             color: 'yellow',
//             flatShading: true,
//             map: texture
//           })
//         }
//       />
//       <Polyhedron
//         name="meshNormalMaterial"
//         position={[-1, 1, 0]}
//         material={new THREE.MeshNormalMaterial({ flatShading: true })}
//       />
//       <Polyhedron
//         name="meshPhongMaterial"
//         position={[1, 1, 0]}
//         material={
//           new THREE.MeshPhongMaterial({
//             color: 'lime',
//             flatShading: true,
//             map: texture
//           })
//         }
//       />
//       <Polyhedron
//         name="meshStandardMaterial"
//         position={[3, 1, 0]}
//         material={
//           new THREE.MeshStandardMaterial({
//             color: 0xff0033,
//             flatShading: true,
//             map: texture
//           })
//         }
//       />
//       <OrbitControls target={[2, 2, 0]} />
//       <axesHelper args={[5]} />
//       <gridHelper />
//       <Stats />
//     </Canvas>
//   )
// }

export default function App() {
  const gltf = useLoader(GLTFLoader, '/models/monkey.glb')
  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        // castShadow
        intensity={4}>
        <Sphere args={[0.25]}></Sphere>
      </directionalLight>
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        // children-0-castShadow
      />
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />
      <Environment preset="sunset" background blur={0.5} />
    </Canvas>
  )
}
