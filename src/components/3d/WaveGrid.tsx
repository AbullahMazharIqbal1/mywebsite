import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WavePoints() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = [];
    const colors = [];
    const n = 50;
    const spacing = 0.3;
    
    for (let x = 0; x < n; x++) {
      for (let z = 0; z < n; z++) {
        positions.push((x - n / 2) * spacing, 0, (z - n / 2) * spacing);
        colors.push(1, 0.84, 0); // Gold color
      }
    }
    
    return [new Float32Array(positions), new Float32Array(colors)];
  }, []);
  
  useFrame((state) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const time = state.clock.elapsedTime;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      const n = 50;
      
      for (let i = 0; i < n * n; i++) {
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        positions[i * 3 + 1] = Math.sin(x * 0.5 + time) * Math.cos(z * 0.5 + time) * 0.5;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial size={0.05} vertexColors sizeAttenuation />
    </Points>
  );
}

export default function WaveGrid() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [10, 10, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <WavePoints />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}