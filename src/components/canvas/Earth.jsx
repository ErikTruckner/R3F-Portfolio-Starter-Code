import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber'

const Earth = () => {
  const [scale, setScale] = useState(0.7)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('./earth/scene.gltf', (gltf) => {
      gltf.scene.scale.set(scale, scale, scale)
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide
        }
      })
      scene.add(gltf.scene)
    })
  }, [scale])

  useFrame(() => {
    setScale(scale + 0.01)
  })

  return <mesh />
}

export default Earth
