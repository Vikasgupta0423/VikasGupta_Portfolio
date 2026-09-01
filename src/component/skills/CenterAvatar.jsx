// import { Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// import AvatarGlow from "./AvatarGlow";
// import AvatarRing from "./AvatarRing";

// const CenterAvatar = () => {
//   const avatarRef = useRef();

//   useFrame((state, delta) => {
//     if (!avatarRef.current) return;

//     // Floating Animation
//     avatarRef.current.position.y =
//       Math.sin(state.clock.elapsedTime * 1.5) * 0.15;

//     // Smooth Rotation
//     avatarRef.current.rotation.y += delta * 0.4;
//   });

//   return (
//     <group ref={avatarRef}>
//       {/* Glow */}
//       <AvatarGlow />

//       {/* Main Avatar Sphere */}
//       <mesh castShadow receiveShadow>
//         <sphereGeometry args={[0.7, 64, 64]} />

//         <meshStandardMaterial
//           color="#0891b2"
//           emissive="#22d3ee"
//           emissiveIntensity={2}
//           roughness={0.2}
//           metalness={0.8}
//         />
//       </mesh>

//       {/* Holographic Ring */}
//       <AvatarRing />

//       {/* Name */}
//       <Text
//         position={[0, -1.2, 0]}
//         fontSize={0.28}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Vikas
//       </Text>

//       {/* Role */}
//       <Text
//         position={[0, -1.55, 0]}
//         fontSize={0.18}
//         color="#22d3ee"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Full Stack Developer
//       </Text>
//     </group>
//   );
// };

// export default CenterAvatar;


// CenterAvatar.jsx
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import AvatarGlow from "./AvatarGlow";
import AvatarRing from "./AvatarRing";

const CenterAvatar = () => {
  const avatarRef = useRef();

  useFrame((state, delta) => {
    if (!avatarRef.current) return;
    avatarRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    avatarRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={avatarRef}>
      <AvatarGlow />

      <mesh>
        <sphereGeometry args={[0.6, 28, 28]} />
        <meshStandardMaterial
          color="#0891b2"
          emissive="#22d3ee"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <AvatarRing />

      <Text
        position={[0, -0.95, 0]}
        fontSize={0.24}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Vikas
      </Text>

      <Text
        position={[0, -1.25, 0]}
        fontSize={0.16}
        color="#22d3ee"
        anchorX="center"
        anchorY="middle"
      >
        Full Stack Dev
      </Text>
    </group>
  );
};

export default CenterAvatar;