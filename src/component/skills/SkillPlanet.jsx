// import { Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { skills } from "@/data/skillsData";
// import SkillTooltip from "./SkillTooltip";

// const radius = 4;

// const SkillPlanet = ({
//   selectedSkill,
//   setSelectedSkill,
// }) => {
//   const groupRef = useRef();

//   const [hovered, setHovered] = useState(null);

//   useFrame((state, delta) => {
//     if (!groupRef.current) return;

//     // Smooth Orbit Rotation (FPS Independent)
//     groupRef.current.rotation.y += delta * 0.25;
//   });

//   return (
//     <group ref={groupRef}>
//       {skills.map((skill, index) => {
//         const angle =
//           (index / skills.length) * Math.PI * 2;

//         const x = Math.cos(angle) * radius;
//         const z = Math.sin(angle) * radius;

//         const isHovered = hovered === skill.id;
//         const isSelected = selectedSkill?.id === skill.id;

//         return (
//           <group
//             key={skill.id}
//             position={[x, 0, z]}
//           >
//             <mesh
//               scale={
//                 isSelected
//                   ? 1.55
//                   : isHovered
//                   ? 1.35
//                   : 1
//               }
//               onClick={() => setSelectedSkill(skill)}
//               onPointerOver={() => {
//                 document.body.style.cursor = "pointer";
//                 setHovered(skill.id);
//               }}
//               onPointerOut={() => {
//                 document.body.style.cursor = "default";
//                 setHovered(null);
//               }}
//             >
//               <sphereGeometry args={[0.35, 32, 32]} />

//               <meshStandardMaterial
//                 color={skill.color}
//                 emissive={skill.color}
//                 emissiveIntensity={
//                   isSelected
//                     ? 3
//                     : isHovered
//                     ? 2
//                     : 0.5
//                 }
//                 roughness={0.3}
//                 metalness={0.8}
//               />
//             </mesh>

//             <Text
//               position={[0, 0.7, 0]}
//               fontSize={0.23}
//               color="white"
//               anchorX="center"
//               anchorY="middle"
//             >
//               {skill.name}
//             </Text>

//             {isHovered && (
//               <SkillTooltip skill={skill} />
//             )}
//           </group>
//         );
//       })}
//     </group>
//   );
// };

// export default SkillPlanet;



// import { Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { skills } from "@/data/skillsData";

// const radius = 3.8;

// const SkillPlanet = ({ selectedSkill, setSelectedSkill }) => {
//   const groupRef = useRef();
//   const [hovered, setHovered] = useState(null);

//   useFrame((_, delta) => {
//     if (!groupRef.current) return;
//     // Smooth Orbit Rotation
//     groupRef.current.rotation.y += delta * 0.18;
//   });

//   return (
//     <group ref={groupRef}>
//       {skills.map((skill, index) => {
//         const angle = (index / skills.length) * Math.PI * 2;
//         const x = Math.cos(angle) * radius;
//         const z = Math.sin(angle) * radius;

//         const isHovered = hovered === skill.id;
//         const isSelected = selectedSkill?.id === skill.id;

//         return (
//           <group key={skill.id || index} position={[x, 0, z]}>
//             {/* Planet Sphere (16x16 segments for optimal performance) */}
//             <mesh
//               scale={isSelected ? 1.4 : isHovered ? 1.25 : 1}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSelectedSkill(skill);
//               }}
//               onPointerOver={(e) => {
//                 e.stopPropagation();
//                 document.body.style.cursor = "pointer";
//                 setHovered(skill.id);
//               }}
//               onPointerOut={(e) => {
//                 e.stopPropagation();
//                 document.body.style.cursor = "default";
//                 setHovered(null);
//               }}
//             >
//               <sphereGeometry args={[0.3, 20, 20]} />
//               <meshStandardMaterial
//                 color={skill.color || "#22d3ee"}
//                 emissive={skill.color || "#22d3ee"}
//                 emissiveIntensity={isSelected ? 2.5 : isHovered ? 1.8 : 0.6}
//                 roughness={0.25}
//                 metalness={0.6}
//               />
//             </mesh>

//             {/* Planet Label */}
//             <Text
//               position={[0, 0.55, 0]}
//               fontSize={0.22}
//               color="white"
//               anchorX="center"
//               anchorY="middle"
//             >
//               {skill.name}
//             </Text>
//           </group>
//         );
//       })}
//     </group>
//   );
// };

// export default SkillPlanet;



// import { Billboard, Text } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { skills } from "@/data/skillsData";

// const radius = 3.8;

// const SkillPlanet = ({ selectedSkill, setSelectedSkill }) => {
//   const groupRef = useRef();
//   const [hovered, setHovered] = useState(null);

//   useFrame((_, delta) => {
//     if (!groupRef.current) return;
//     // Jab koi skill selected ho ya hover ho, rotation pause ho jayegi taaki click accurate rahe
//     if (!selectedSkill && !hovered) {
//       groupRef.current.rotation.y += delta * 0.22;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {skills.map((skill, index) => {
//         const angle = (index / skills.length) * Math.PI * 2;
//         const x = Math.cos(angle) * radius;
//         const z = Math.sin(angle) * radius;

//         const isHovered = hovered === skill.id;
//         const isSelected = selectedSkill?.id === skill.id;

//         return (
//           <group key={skill.id || index} position={[x, 0, z]}>
//             {/* Planet Mesh */}
//             <mesh
//               scale={isSelected ? 1.45 : isHovered ? 1.3 : 1}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSelectedSkill(skill);
//               }}
//               onPointerDown={(e) => {
//                 // Mobile instant tap support
//                 e.stopPropagation();
//                 setSelectedSkill(skill);
//               }}
//               onPointerOver={(e) => {
//                 e.stopPropagation();
//                 document.body.style.cursor = "pointer";
//                 setHovered(skill.id);
//               }}
//               onPointerOut={(e) => {
//                 e.stopPropagation();
//                 document.body.style.cursor = "default";
//                 setHovered(null);
//               }}
//             >
//               <sphereGeometry args={[0.32, 24, 24]} />
//               <meshStandardMaterial
//                 color={skill.color || "#22d3ee"}
//                 emissive={skill.color || "#22d3ee"}
//                 emissiveIntensity={isSelected ? 3 : isHovered ? 2.2 : 0.7}
//                 roughness={0.2}
//                 metalness={0.7}
//               />
//             </mesh>

//             {/* Billboard: Ye text hamesha camera ki taraf sidha dekhega, kabhi ulta nahi hoga */}
//             <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
//               <Text
//                 position={[0, 0.6, 0]}
//                 fontSize={0.24}
//                 color={isSelected || isHovered ? "#22d3ee" : "#ffffff"}
//                 anchorX="center"
//                 anchorY="middle"
//                 outlineWidth={0.02}
//                 outlineColor="#040816"
//               >
//                 {skill.name}
//               </Text>
//             </Billboard>
//           </group>
//         );
//       })}
//     </group>
//   );
// };

// export default SkillPlanet;



import { Billboard, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import { skills } from "@/data/skillsData";

const SkillPlanet = ({ selectedSkill, setSelectedSkill }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(null);
  
  const { viewport, size } = useThree();

  const { radius, sphereSize, fontSize, textOffset } = useMemo(() => {
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;

    if (isMobile) {
      return {
        radius: Math.min(viewport.width / 2.4, 2.2),
        sphereSize: 0.22,
        fontSize: 0.18,
        textOffset: 0.45,
      };
    }

    if (isTablet) {
      return {
        radius: 2.8,
        sphereSize: 0.28,
        fontSize: 0.22,
        textOffset: 0.52,
      };
    }

    return {
      radius: 3.8,
      sphereSize: 0.32,
      fontSize: 0.24,
      textOffset: 0.6,
    };
  }, [viewport.width, size.width]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!selectedSkill && !hovered) {
      groupRef.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const isHovered = hovered === skill.id;
        const isSelected = selectedSkill?.id === skill.id;

        return (
          <group key={skill.id || index} position={[x, 0, z]}>
            {/* Planet Mesh */}
            <mesh
              scale={isSelected ? 1.4 : isHovered ? 1.25 : 1}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSkill(skill);
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                setSelectedSkill(skill);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "pointer";
                setHovered(skill.id);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "default";
                setHovered(null);
              }}
            >
              <sphereGeometry args={[sphereSize, 24, 24]} />
              <meshStandardMaterial
                color={skill.color || "#22d3ee"}
                emissive={skill.color || "#22d3ee"}
                emissiveIntensity={isSelected ? 3 : isHovered ? 2.2 : 0.7}
                roughness={0.2}
                metalness={0.7}
              />
            </mesh>

            {/* Billboard Text */}
            <Billboard follow={true}>
              <Text
                position={[0, textOffset, 0]}
                fontSize={fontSize}
                color={isSelected || isHovered ? "#22d3ee" : "#ffffff"}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.015}
                outlineColor="#040816"
              >
                {skill.name}
              </Text>
            </Billboard>
          </group>
        );
      })}
    </group>
  );
};

export default SkillPlanet;