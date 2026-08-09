import { Line } from "@react-three/drei";

const OrbitRing = ({ radius, color = "#22d3ee" }) => {
  const points = [];

  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;

    points.push([
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius,
    ]);
  }

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.2}
    />
  );
};

export default OrbitRing;