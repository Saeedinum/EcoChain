import { useEffect, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three"
import { GroupProps } from "@react-three/fiber"

export default function Model(props: GroupProps) {
  const { nodes, materials } = useGLTF("/earth.gltf")

  const [scale, setScale] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      let newScale
      if (window.innerWidth < 640) {
        newScale = 2
      } else if (window.innerWidth < 768) {
        newScale = 2.4
      } else if (window.innerWidth < 1024) {
        newScale = 2.7
      } else {
        newScale = 3
      }
      setScale(newScale)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <group {...props} dispose={null}>
      <mesh geometry={(nodes.Object_4 as Mesh).geometry} material={materials["Scene_-_Root"]} scale={scale} />
    </group>
  )
}

useGLTF.preload("/earth.gltf")
