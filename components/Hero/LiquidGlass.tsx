"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";

function Scene() {
  const torus = useRef<any>();

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.01;
      torus.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Torus ref={torus} args={[2, 0.5, 128, 128]}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0.1}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </Torus>
      <Environment preset="city" />
    </>
  );
}

export default function LiquidGlass() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
