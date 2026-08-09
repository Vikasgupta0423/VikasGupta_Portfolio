import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Html,
  Text,
  Torus,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

import OrbitRing from "./OrbitRing";

const ProjectPlanet = ({
  project,
  index,
  total,
  selectedProject,
  setSelectedProject,
}) => {
  const groupRef = useRef();
  const meshRef = useRef();
  const ringRef = useRef();

  const [hovered, setHovered] = useState(false);

  const orbitRadius = 5;

  const orbitSpeed =
    project.planet?.speed ??
    (0.25 + index * 0.05);

  const planetSize =
    project.planet?.size ?? 0.7;

  const glow =
    project.planet?.glow ?? 3;

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current)
      return;

    const elapsed = state.clock.elapsedTime;

    const angle =
      elapsed * orbitSpeed +
      (index / total) * Math.PI * 2;

    groupRef.current.position.x =
      Math.cos(angle) * orbitRadius;

    groupRef.current.position.z =
      Math.sin(angle) * orbitRadius;

    groupRef.current.position.y =
      Math.sin(elapsed * 2 + index) * 0.25;

    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.rotation.x += delta * 0.08;

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18;
    }

    const active =
      hovered ||
      selectedProject?.id === project.id;

    const pulse = active
      ? 1.28 +
        Math.sin(elapsed * 4) * 0.08
      : 1;

    meshRef.current.scale.lerp(
      new THREE.Vector3(
        pulse,
        pulse,
        pulse
      ),
      0.08
    );
  });

  return (
    <group ref={groupRef}>
      {/* Orbit Ring */}
      <OrbitRing
        radius={orbitRadius}
        color={project.color}
      />

      {/* Sparkles */}
      <Sparkles
        count={25}
        scale={planetSize * 3}
        size={3}
        speed={0.3}
        color={project.color}
      />

      {/* Planet */}
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor =
            "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor =
            "default";
        }}
        onClick={() =>
          setSelectedProject({
            ...project,
            index,
            total,
          })
        }
      >
        <sphereGeometry
          args={[
            planetSize,
            64,
            64,
          ]}
        />

        <meshStandardMaterial
          color={project.color}
          metalness={0.85}
          roughness={0.12}
          emissive={project.color}
          emissiveIntensity={
            selectedProject?.id === project.id
              ? glow
              : hovered
              ? glow * 0.75
              : 0.5
          }
        />
      </mesh>

      {/* Saturn Ring */}
      {project.planet?.ring && (
        <group
          ref={ringRef}
          rotation={[
            Math.PI / 2.8,
            0,
            0,
          ]}
        >
          <Torus
            args={[
              planetSize + 0.18,
              0.035,
              16,
              100,
            ]}
          >
            <meshStandardMaterial
              color={
                project.planet.ringColor
              }
              emissive={
                project.planet.ringColor
              }
              emissiveIntensity={2}
              transparent
              opacity={0.85}
            />
          </Torus>
        </group>
      )}

      {/* Planet Name */}
      <Text
        position={[
          0,
          -(planetSize + 0.55),
          0,
        ]}
        fontSize={0.24}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.015}
        outlineColor="#22d3ee"
      >
        {project.title}
      </Text>

      {/* Tooltip */}
      {hovered && (
        <Html
          distanceFactor={10}
          center
          transform
        >
          <div className="rounded-2xl border border-cyan-400/20 bg-[#0b1220]/90 backdrop-blur-xl px-4 py-3 shadow-2xl min-w-[180px]">
            <h4 className="text-center font-semibold text-white">
              {project.title}
            </h4>

            <p className="mt-2 text-center text-xs text-slate-300">
              {project.category}
            </p>

            <div className="mt-3 flex justify-center">
              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  project.status ===
                  "Completed"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-yellow-500/20 text-yellow-300"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-3 text-center text-xs text-cyan-300">
              Click to Explore 🚀
            </p>
          </div>
        </Html>
      )}
    </group>
  );
};

export default ProjectPlanet;