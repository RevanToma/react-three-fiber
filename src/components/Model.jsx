import { useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

export default function Model() {
  const { scene } = useLoader(GLTFLoader, '/models/scene.glb'),
    {
      x,
      y,
      z,
      visible,
      color,
      metalness,
      roughness,
      clearCoat,
      clearcoatRougness,
      transmission,
      ior,
      thickness
    } = useControls('Suzanne', {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: '#ffbc85' },
      metalness: { value: 0.5, min: 0, max: 1.0, step: 0.01 },
      roughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
      clearCoat: { value: 0, min: 0, max: 1.0, step: 0.01 },
      clearcoatRougness: { value: 0, min: 0, max: 1.0, step: 0.01 },
      transmission: { value: 1, min: 0, max: 1.0, step: 0.01 },
      ior: { value: 1.5, min: 0, max: 2.0, step: 0.01 },
      thickness: { value: 0.1, min: 0, max: 1.0, step: 0.01 }
    })

  return (
    <primitive
      object={scene}
      children-0-rotation={[x, y, z]}
      children-0-visible={visible}
      children-0-material-color={color}
      children-0-material-metalness={metalness}
      children-0-material-roughness={roughness}
      children-0-material-clearCoat={clearCoat}
      children-0-material-clearcoatRougness={clearcoatRougness}
      children-0-material-transmission={transmission}
      children-0-material-ior={ior}
      children-0-material-thickness={thickness}
    />
  )
}
