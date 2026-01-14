'use client'
import { shaderMaterial } from "@react-three/drei"
import { extend, useFrame, ThreeElement } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import vertex from "@/shaders/vertex.glsl"
import fragment from "@/shaders/fragment.glsl"
import { audioManager } from "../lib/audioManager"


const SphereMaterial = shaderMaterial(
    { time: 0, uFrequency: 0 }, 
    vertex, 
    fragment
)

extend({ SphereMaterial })

declare module "@react-three/fiber" {
  interface ThreeElements {
    sphereMaterial: ThreeElement<typeof SphereMaterial> & { time?: number, uFrequency?: number }
  }
}


export default function ShaderSphere() {
    const ref = useRef(null)

    useFrame((state) => {
        if (ref.current) {
            (ref.current as any).time = state.clock.elapsedTime
            // Get frequency data (0-255), normalize to 0-1 range roughly
            const freq = audioManager.getFrequencyData();
            // Smoothly interpolate current frequency for less jitter if desired, 
            // but direct mapping is fine for now. 
            // We pass it to the uniform.
            (ref.current as any).uFrequency = freq / 255.0; 
        }
    })

    return (
        <mesh>
            <sphereGeometry args={[1.3, 128, 128]} />
            <sphereMaterial ref={ref} />
        </mesh>
    )
}
