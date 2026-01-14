'use client';
import { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Group } from 'three';

export default function Character() {
    const group = useRef<Group>(null);
    const { scene, animations } = useGLTF('https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb');
    const { actions } = useAnimations(animations, group);
    
    // List of fun animations to cycle through
    const animationList = ['Wave', 'Dance', 'Jump', 'ThumbsUp', 'Yes', 'No', 'Idle'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const animName = animationList[index];
        const action = actions[animName];
        
        // Reset and fade in the new action
        if (action) {
            action.reset().fadeIn(0.5).play();
        }

        // Cleanup: fade out when index changes or unmount
        return () => {
            if (action) action.fadeOut(0.5);
        };
    }, [index, actions]);

    const handleClick = () => {
        // Cycle to next animation
        setIndex((prev) => (prev + 1) % animationList.length);
    };

    return (
        <group 
            ref={group} 
            dispose={null} 
            position={[0, -2, 0]} 
            scale={[0.8, 0.8, 0.8]}
            onClick={handleClick}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
        >
            <primitive object={scene} />
        </group>
    );
}
