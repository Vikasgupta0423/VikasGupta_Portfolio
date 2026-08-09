import { Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ProjectCore = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += 0.003;
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 2) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Glow */}
      <Sphere args={[1.1, 64, 64]}>
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.12}
        />
      </Sphere>

      {/* Core */}
      <Sphere args={[0.65, 64, 64]}>
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#22d3ee"
          emissiveIntensity={3}
          metalness={0.9}
          roughness={0.15}
        />
      </Sphere>

      <Text
        position={[0, -1.2, 0]}
        fontSize={0.28}
        color="white"
        anchorX="center"
      >
        Vikas
      </Text>

      <Text
        position={[0, -1.55, 0]}
        fontSize={0.16}
        color="#67e8f9"
        anchorX="center"
      >
        Project Universe
      </Text>
    </group>
  );
};

export default ProjectCore;