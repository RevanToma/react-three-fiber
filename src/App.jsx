import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import Box from './components/Box'
import useKeyboard from './hooks/useKeyboard'

export default function App() {
  const keyMap = useKeyboard()

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      <Box position={[-1.5, 0.5, 0]} keyMap={keyMap} />
      <Box position={[0, 0.5, 0]} selected keyMap={keyMap} />
      <Box position={[1.5, 0.5, 0]} keyMap={keyMap} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}
