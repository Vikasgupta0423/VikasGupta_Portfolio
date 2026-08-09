import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CameraRig = ({ children }) => {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Target Rotation
    const targetX = mouse.y * 0.2;
    const targetY = mouse.x * 0.3;

    // Smooth Interpolation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      delta * 3
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      delta * 3
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;