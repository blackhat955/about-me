"use client";

import { Canvas } from "@react-three/fiber";

function Scene() {
  return null; // Placeholder for the black hole effect
}

export default function BlackHole() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
