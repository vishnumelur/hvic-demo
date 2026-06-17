"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const H2 = "#00e08a";
const CYAN = "#00c2ff";

function Electron({ radius, speed, tilt, phase, color }: { radius: number; speed: number; tilt: number; phase: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + phase;
    if (ref.current) {
      ref.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius * Math.sin(tilt), Math.sin(t) * radius * Math.cos(tilt));
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} toneMapped={false} />
    </mesh>
  );
}

function OrbitRing({ radius, tilt, color }: { radius: number; tilt: number; color: string }) {
  return (
    <mesh rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.006, 12, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} toneMapped={false} />
    </mesh>
  );
}

function Molecule() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    const px = state.pointer.x;
    const py = state.pointer.y;
    if (group.current) {
      group.current.rotation.y += 0.0024;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.35, 0.05);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -px * 0.2, 0.05);
    }
  });

  return (
    <group ref={group}>
      {/* glowing energy core */}
      <Icosahedron args={[1.15, 6]}>
        <MeshDistortMaterial
          color={H2}
          emissive={H2}
          emissiveIntensity={0.9}
          roughness={0.15}
          metalness={0.1}
          distort={0.32}
          speed={1.6}
          toneMapped={false}
        />
      </Icosahedron>

      {/* wireframe shell */}
      <Icosahedron args={[1.7, 2]}>
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.12} toneMapped={false} />
      </Icosahedron>

      <OrbitRing radius={2.3} tilt={0.4} color={H2} />
      <OrbitRing radius={2.3} tilt={1.7} color={CYAN} />
      <OrbitRing radius={2.6} tilt={2.7} color={H2} />

      <Electron radius={2.3} speed={1.1} tilt={0.4} phase={0} color={CYAN} />
      <Electron radius={2.3} speed={0.9} tilt={1.7} phase={2} color={H2} />
      <Electron radius={2.6} speed={1.3} tilt={2.7} phase={4} color={"#7cf5c0"} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={120} color={H2} />
      <pointLight position={[-6, -3, 2]} intensity={90} color={CYAN} />
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
        <Molecule />
      </Float>
      <Sparkles count={120} scale={12} size={2.4} speed={0.3} color={H2} opacity={0.7} />
      <Sparkles count={80} scale={14} size={3} speed={0.2} color={CYAN} opacity={0.5} />
    </>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-64 w-64 animate-float rounded-full bg-[radial-gradient(circle,rgba(0,224,138,0.5),transparent_70%)] blur-2xl" />
    </div>
  );
}

export default function HydrogenHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <Fallback />;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
