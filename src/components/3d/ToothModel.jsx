import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

export const ToothModel = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        {/* Placeholder for an actual Tooth 3D model. Using an Icosahedron for a diamond/premium feel */}
        <icosahedronGeometry args={[2.5, 2]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#0050ff"
          emissiveIntensity={0.5}
          wireframe={true}
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};
