import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Nebula = () => {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0003;
  });

  return (
    <Sphere ref={ref} args={[40, 64, 64]}>
      <meshBasicMaterial
        color="#4f46e5"
        transparent
        opacity={0.05}
        side={2} // THREE.BackSide
      />
    </Sphere>
  );
};

export default Nebula;