// import { Torus } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// const AvatarRing = () => {
//   const ringRef = useRef();

//   useFrame((state, delta) => {
//     if (!ringRef.current) return;
    

//     // Smooth Rotation
//     ringRef.current.rotation.x += delta * 0.4;
//     ringRef.current.rotation.y += delta * 0.8;
//     ringRef.current.rotation.z += delta * 0.2;

//     // Floating Effect
//     ringRef.current.position.y =
//       Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
//   });

//   return (
//     <Torus
//       ref={ringRef}
//       args={[1.3, 0.03, 32, 120]}
//     >
//       <meshStandardMaterial
//         color="#22d3ee"
//         emissive="#22d3ee"
//         emissiveIntensity={2.5}
//         roughness={0.15}
//         metalness={1}
//       />
//     </Torus>
//   );
// };

// export default AvatarRing;



// AvatarRing.jsx
import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AvatarRing = () => {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x += delta * 0.3;
    ringRef.current.rotation.y += delta * 0.6;
  });

  return (
    <Torus ref={ringRef} args={[1.1, 0.02, 16, 48]}>
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={2}
        roughness={0.2}
      />
    </Torus>
  );
};

export default AvatarRing;