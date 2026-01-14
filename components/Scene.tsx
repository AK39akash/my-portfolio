'use client'
import { Canvas, useThree } from "@react-three/fiber"
import { useEffect } from "react"
import ShaderSphere from "./ShaderSphere"
import { animateCamera } from "../lib/scrollAnimation"

function CameraController() {
    const { camera } = useThree()

    useEffect(() => {
        animateCamera(camera)
    }, [camera])

    return null
}


export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }} >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <ShaderSphere />
            <CameraController />

          
        </Canvas>
    )
}