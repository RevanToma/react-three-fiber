import { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

export function Model() {
  const [hovered, setHovered] = useState(false)
  const { nodes, materials } = useGLTF('/models/shoe-draco.glb')

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useControls('Shoe', () => {
    console.log('creating color pickers')

    // using forEach
    // const colorPickers = {}
    // Object.keys(materials).forEach((m) => {
    //   colorPickers[m] = {
    //     value: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
    //     onChange: (v) => {
    //       materials[m].color = new Color(v)
    //     }
    //   }
    // })
    // return colorPickers

    // using reduce
    return Object.keys(materials).reduce(
      (acc, m) =>
        Object.assign(acc, {
          [m]: {
            value:
              '#' +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
            onChange: (v) => {
              materials[m].color = new Color(v)
            }
          }
        }),
      {}
    )
  })

  // JSX of glTF created using the command
  // npx gltfjsx .\public\models\shoe-draco.glb

  return (
    <group
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        document.getElementById('Shoe.' + e.object.material.name).focus()
      }}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

useGLTF.preload('./models/shoe-draco.glb')
