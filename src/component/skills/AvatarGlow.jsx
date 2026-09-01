// import { Sphere } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// const AvatarGlow = () => {
//   const glowRef = useRef();

//   useFrame((state) => {
//     if (!glowRef.current) return;

//     // Soft Pulse Animation
//     const pulse =
//       1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;

//     glowRef.current.scale.set(pulse, pulse, pulse);
//   });

//   return (
//     <Sphere
//       ref={glowRef}
//       args={[1.1, 64, 64]}
//     >
//       <meshBasicMaterial
//         color="#22d3ee"
//         transparent
//         opacity={0.15}
//       />
//     </Sphere>
//   );
// };

// export default AvatarGlow;

// AvatarGlow.jsx
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AvatarGlow = () => {
  const glowRef = useRef();

  useFrame((state) => {
    if (!glowRef.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
    glowRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <Sphere ref={glowRef} args={[0.9, 20, 20]}>
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
    </Sphere>
  );
};

export default AvatarGlow;