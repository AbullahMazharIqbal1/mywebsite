import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function DNA() {
  const groupRef = useRef<THREE.Group>(null);
  const spheres: JSX.Element[] = [];
  
  // Create DNA helix structure
  for (let i = 0; i < 30; i++) {
    const angle = (i / 30) * Math.PI * 4;
    const y = (i - 15) * 0.2;
    
    // First strand
    spheres.push(
      <Sphere key={`a-${i}`} position={[Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5]} args={[0.15, 16, 16]}>
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </Sphere>
    );
    
    // Second strand
    spheres.push(
      <Sphere key={`b-${i}`} position={[Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5]} args={[0.15, 16, 16]}>
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </Sphere>
    );
    
    // Connecting bars
    if (i % 3 === 0) {
      spheres.push(
        <mesh key={`bar-${i}`} position={[0, y, 0]} rotation={[0, angle, 0]}>
          <boxGeometry args={[3, 0.05, 0.05]} />
          <meshStandardMaterial color="#8B7355" metalness={0.5} roughness={0.5} />
        </mesh>
      );
    }
  }
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {spheres}
    </group>
  );
}

export default function DNAHelix() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40">
      <Canvas camera={{ position: [5, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
        
        <DNA />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}