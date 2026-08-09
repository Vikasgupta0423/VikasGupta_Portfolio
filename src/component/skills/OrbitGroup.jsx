import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const OrbitGroup = ({ children }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default OrbitGroup;