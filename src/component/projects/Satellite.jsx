import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Satellite = ({ radius = 1.3 }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 2;

    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;

    ref.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.08, 0.08, 0.25]} />

      <meshStandardMaterial
        color="#ffffff"
        emissive="#22d3ee"
        emissiveIntensity={3}
      />
    </mesh>
  );
};

export default Satellite;