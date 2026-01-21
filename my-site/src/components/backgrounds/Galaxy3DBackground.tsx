import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';

function SimpleStars() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Rotate the stars slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.01;
    }
  });

  // Create star positions - moved further back
  const starPositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;     // x - increased spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400; // y - increased spread  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200 - 50; // z - pushed back (-100 to -150)
    }
    return positions;
  }, []);

  // Create the geometry
  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    return geometry;
  }, [starPositions]);

  // Create custom star texture
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d')!;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Create radial gradient for glow effect
    const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    // Draw the star/diamond shape
    context.fillStyle = gradient;
    context.beginPath();
    
    // Create a 4-pointed star/diamond
    const spikes = 4;
    const outerRadius = 30;
    const innerRadius = 15;
    
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
    
    context.closePath();
    context.fill();
    
    // Add extra glow with a circle
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(centerX, centerY, 20, 0, Math.PI * 2);
    context.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <group ref={meshRef}>
      <points geometry={starsGeometry}>
        <pointsMaterial 
          size={4} 
          color="white" 
          sizeAttenuation={true}
          transparent={true}
          alphaTest={0.001}
          opacity={0.8}
          map={starTexture}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function Galaxy3DBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      // Updated gradient to match the nebula colors better
      background: 'linear-gradient(170deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #232352ff 75%, #545487 100%)'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={["#0c0c0c", 80, 300]} />
        <SimpleStars />
      </Canvas>
    </div>
  );
}