import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const PlanetAtmosphere = ({ size, color }) => {
  const glowRef = useRef();

  useFrame((state) => {
    if (!glowRef.current) return;

    glowRef.current.rotation.y += 0.003;

    const scale =
      1.12 +
      Math.sin(state.clock.elapsedTime * 2) * 0.03;

    glowRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={glowRef}>
      <sphereGeometry args={[size * 1.18, 64, 64]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={4}
        transparent
        opacity={0.12}
        depthWrite={false}
      />
    </mesh>
  );
};

export default PlanetAtmosphere;