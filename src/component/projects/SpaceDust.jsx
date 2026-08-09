import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const SpaceDust = () => {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(3000);

    for (let i = 0; i < 1000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }

    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.01;
    pointsRef.current.rotation.x += delta * 0.003;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

export default SpaceDust;