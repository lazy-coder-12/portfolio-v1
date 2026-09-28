"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function CrystalMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useFrame((state) => {
    if (!meshRef.current) return;
    // Cursor influence
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    // Smooth lerp
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX + state.clock.getElapsedTime() * 0.15,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -targetY,
      0.05
    );

    if (wireframeRef.current) {
      wireframeRef.current.rotation.copy(meshRef.current.rotation);
    }
  });

  const coreColor = "#E95810";
  const wireColor = "#D44A08";

  return (
    <group position={[0, 0, 0]}>
      {/* Outer translucent organic crystal with subtle distortion */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color={coreColor}
            emissive="#B03808"
            emissiveIntensity={0.25}
            roughness={0.2}
            metalness={0.1}
            distort={0.25}
            speed={1.5}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Outer geometric wireframe cage */}
        <mesh ref={wireframeRef} scale={1.88}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            wireframe
            color={wireColor}
            transparent
            opacity={isLight ? 0.35 : 0.25}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DCanvas() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={isLight ? 0.8 : 0.4} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={isLight ? 1.2 : 1.5}
          color={isLight ? "#ffffff" : "#EEF7CE"}
        />
        <pointLight
          position={[-4, -3, -2]}
          intensity={0.8}
          color="#E95810"
        />
        <CrystalMesh />
      </Canvas>
    </div>
  );
}
