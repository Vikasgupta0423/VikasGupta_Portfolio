import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const ShootingStar = ({ startX, startY, startZ, speed }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.position.x -= speed * delta;
    ref.current.position.y -= speed * delta * 0.5;

    if (ref.current.position.x < -35) {
      ref.current.position.x = 35;
      ref.current.position.y = 15 + Math.random() * 10;
    }
  });

  return (
    <group ref={ref} position={[startX, startY, startZ]}>
      <Line
        points={[
          [0, 0, 0],
          [2, -0.4, 0],
        ]}
        color="#ffffff"
        lineWidth={2}
      />
    </group>
  );
};

const ShootingStars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 20 + Math.random() * 20,
        y: 8 + Math.random() * 12,
        z: -10 - Math.random() * 20,
        speed: 4 + Math.random() * 3,
      })),
    []
  );

  return (
    <>
      {stars.map((star) => (
        <ShootingStar
          key={star.id}
          startX={star.x}
          startY={star.y}
          startZ={star.z}
          speed={star.speed}
        />
      ))}
    </>
  );
};

export default ShootingStars;