import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Box>
    </Float>
  );
}

export default function FloatingCubes() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        
        <RotatingCube position={[-2, 2, 0]} color="#FFD700" speed={0.5} />
        <RotatingCube position={[2, -1, 0]} color="#D4AF37" speed={0.3} />
        <RotatingCube position={[0, 0, 0]} color="#B8860B" speed={0.4} />
        <RotatingCube position={[-2, -2, 0]} color="#FFD700" speed={0.6} />
        <RotatingCube position={[3, 1, 0]} color="#D4AF37" speed={0.2} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}