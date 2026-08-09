import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { skills } from "@/data/skillsData";
import SkillTooltip from "./SkillTooltip";

const radius = 4;

const SkillPlanet = ({
  selectedSkill,
  setSelectedSkill,
}) => {
  const groupRef = useRef();

  const [hovered, setHovered] = useState(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth Orbit Rotation (FPS Independent)
    groupRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle =
          (index / skills.length) * Math.PI * 2;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const isHovered = hovered === skill.id;
        const isSelected = selectedSkill?.id === skill.id;

        return (
          <group
            key={skill.id}
            position={[x, 0, z]}
          >
            <mesh
              scale={
                isSelected
                  ? 1.55
                  : isHovered
                  ? 1.35
                  : 1
              }
              onClick={() => setSelectedSkill(skill)}
              onPointerOver={() => {
                document.body.style.cursor = "pointer";
                setHovered(skill.id);
              }}
              onPointerOut={() => {
                document.body.style.cursor = "default";
                setHovered(null);
              }}
            >
              <sphereGeometry args={[0.35, 32, 32]} />

              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={
                  isSelected
                    ? 3
                    : isHovered
                    ? 2
                    : 0.5
                }
                roughness={0.3}
                metalness={0.8}
              />
            </mesh>

            <Text
              position={[0, 0.7, 0]}
              fontSize={0.23}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>

            {isHovered && (
              <SkillTooltip skill={skill} />
            )}
          </group>
        );
      })}
    </group>
  );
};

export default SkillPlanet;