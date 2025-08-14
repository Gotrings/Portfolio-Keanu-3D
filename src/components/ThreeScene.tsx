import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Float } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Geometric shapes component for the 3D scene
function GeometricShapes() {
  const meshRef = useRef<THREE.Group>(null);
  const { scrollY } = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollY.get() * 0.001;
      meshRef.current.rotation.x = Math.sin(scrollY.get() * 0.001) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        {/* Main cube */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#2160a2"
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
        
        {/* Surrounding spheres */}
        <mesh position={[2, 1, -1]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#e5a441" />
        </mesh>
        
        <mesh position={[-1.5, -0.5, 1]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial
            color="#2ca5a8"
            transparent
            opacity={0.7}
          />
        </mesh>
        
        <mesh position={[1, -1.5, 2]}>
          <torusGeometry args={[0.3, 0.1, 8, 24]} />
          <meshStandardMaterial color="#e5a441" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// Lighting component
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2ca5a8" />
    </>
  );
}

interface ThreeSceneProps {
  className?: string;
}

export default function ThreeScene({ className }: ThreeSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <GeometricShapes />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}