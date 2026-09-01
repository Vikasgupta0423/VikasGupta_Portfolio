// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import SkillPlanet from "./SkillPlanet";
// import CenterAvatar from "./CenterAvatar";
// import CameraRig from "./CameraRig";

// const SkillsCanvas = ({
//   selectedSkill,
//   setSelectedSkill,
// }) => {
//   return (
//     <div className="h-[700px] rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#050816]">
//       <Canvas
//         shadows
//         camera={{
//           position: [0, 0, 10],
//           fov: 50,
//         }}
//       >
//         {/* Premium Lighting */}
//         <ambientLight intensity={0.7} />

//         <directionalLight
//           position={[5, 5, 5]}
//           intensity={2}
//           castShadow
//         />

//         <pointLight
//           position={[-5, 2, 3]}
//           intensity={3}
//           color="#22d3ee"
//         />

//         <pointLight
//           position={[5, -2, -3]}
//           intensity={2}
//           color="#9333ea"
//         />

//         {/* Background Stars */}
//         <Stars
//           radius={100}
//           depth={60}
//           count={7000}
//           factor={5}
//           saturation={0}
//           fade
//           speed={1}
//         />

//         {/* Center Avatar */}
//         <CameraRig>
//           <CenterAvatar />

//           <SkillPlanet
//             selectedSkill={selectedSkill}
//             setSelectedSkill={setSelectedSkill}
//           />
//         </CameraRig>

//         {/* Camera Controls */}
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate={false}
//         />
//       </Canvas>
//     </div>
//   );
// };

// export default SkillsCanvas;







// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import SkillPlanet from "./SkillPlanet";
// import CenterAvatar from "./CenterAvatar";
// import CameraRig from "./CameraRig";

// const SkillsCanvas = ({ selectedSkill, setSelectedSkill }) => {
//   return (
//     <div className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full">
//       <Canvas
//         dpr={[1, 1.5]} // Clamped DPR for smooth 60fps on retina & mobile screens
//         gl={{ antialias: true, powerPreference: "high-performance" }}
//         camera={{
//           position: [0, 2.5, 9.5],
//           fov: 48,
//         }}
//       >
//         {/* Balanced Lightweight Lighting */}
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[6, 6, 6]} intensity={1.5} />
//         <pointLight position={[-4, 2, 2]} intensity={2} color="#22d3ee" />
//         <pointLight position={[4, -2, -2]} intensity={1.2} color="#818cf8" />

//         {/* Lightweight Stars */}
//         <Stars
//           radius={50}
//           depth={30}
//           count={1500}
//           factor={3}
//           saturation={0}
//           fade
//           speed={0.6}
//         />

//         {/* 3D Scene Interactive Core */}
//         <CameraRig>
//           <CenterAvatar />
//           <SkillPlanet
//             selectedSkill={selectedSkill}
//             setSelectedSkill={setSelectedSkill}
//           />
//         </CameraRig>

//         {/* Touch / Drag Controls */}
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 1.7}
//           minPolarAngle={Math.PI / 2.8}
//         />
//       </Canvas>
//     </div>
//   );
// };

// export default SkillsCanvas;





import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { MousePointerClick } from "lucide-react";
import SkillPlanet from "./SkillPlanet";
import CenterAvatar from "./CenterAvatar";
import CameraRig from "./CameraRig";

const SkillsCanvas = ({ selectedSkill, setSelectedSkill }) => {
  return (
    <div className="relative h-[440px] sm:h-[520px] lg:h-[600px] w-full select-none">
      {/* Visual User Affordance Hint (Top-Left Badge) */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#081124]/80 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
        <MousePointerClick size={14} className="text-cyan-400 animate-bounce" />
        <span className="text-[10px] sm:text-xs font-semibold text-cyan-200">
          Click or Tap planets to inspect
        </span>
      </div>

      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{
          position: [0, 2.5, 9.5],
          fov: 48,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 6, 6]} intensity={1.5} />
        <pointLight position={[-4, 2, 2]} intensity={2.5} color="#22d3ee" />
        <pointLight position={[4, -2, -2]} intensity={1.5} color="#818cf8" />

        <Stars
          radius={50}
          depth={30}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />

        <CameraRig>
          <CenterAvatar />
          <SkillPlanet
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />
        </CameraRig>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.8}
        />
      </Canvas>
    </div>
  );
};

export default SkillsCanvas;