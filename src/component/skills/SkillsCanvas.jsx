import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SkillPlanet from "./SkillPlanet";
import CenterAvatar from "./CenterAvatar";
import CameraRig from "./CameraRig";

const SkillsCanvas = ({
  selectedSkill,
  setSelectedSkill,
}) => {
  return (
    <div className="h-[700px] rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#050816]">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        {/* Premium Lighting */}
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          castShadow
        />

        <pointLight
          position={[-5, 2, 3]}
          intensity={3}
          color="#22d3ee"
        />

        <pointLight
          position={[5, -2, -3]}
          intensity={2}
          color="#9333ea"
        />

        {/* Background Stars */}
        <Stars
          radius={100}
          depth={60}
          count={7000}
          factor={5}
          saturation={0}
          fade
          speed={1}
        />

        {/* Center Avatar */}
        <CameraRig>
          <CenterAvatar />

          <SkillPlanet
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />
        </CameraRig>

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default SkillsCanvas;