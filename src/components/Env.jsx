import { useControls } from 'leva'
import { Environment } from '@react-three/drei'

export default function Env() {
  const { height, radius, scale } = useControls('Ground', {
    height: { value: 10, min: 0, max: 100, step: 1 },
    radius: { value: 115, min: 0, max: 1000, step: 1 },
    scale: { value: 100, min: 0, max: 1000, step: 1 }
  })
  return (
    <Environment
      preset="sunset"
      background
      blur={0}
      ground={{
        height,
        radius,
        scale
      }}
    />
  )
}
