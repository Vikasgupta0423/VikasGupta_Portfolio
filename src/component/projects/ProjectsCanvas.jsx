import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";

import CameraRig from "../skills/CameraRig";
import CameraController from "./CameraController";
import ProjectPlanet from "./ProjectPlanet";
import ProjectInfoPanel from "./ProjectInfoPanel";
import { projects } from "../../data/projectsData";
import ProjectCore from "./ProjectCore";
import SceneEffects from "./SceneEffects";
import Nebula from "./Nebula";
import ShootingStars from "./ShootingStars";
import SpaceDust from "./SpaceDust";

const ProjectsCanvas = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="relative h-[750px] rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#050816]">
            <Canvas
                shadows
                camera={{
                    position: [0, 0, 12],
                    fov: 50,
                }}
            >
                {/* Lights */}
                <ambientLight intensity={0.7} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                    castShadow
                />

                <pointLight
                    position={[-5, 3, 3]}
                    intensity={3}
                    color="#22d3ee"
                />

                <pointLight
                    position={[5, -3, -3]}
                    intensity={2}
                    color="#9333ea"
                />

                <Nebula />

                <ShootingStars />

                <SpaceDust />
                {/* Space */}
                <Stars
                    radius={120}
                    depth={60}
                    count={7000}
                    factor={5}
                    fade
                    speed={1}
                />

                {/* Camera Animation */}
                <CameraController selectedProject={selectedProject} />

                {/* Scene */}
                <CameraRig>
                    <ProjectCore />

                    {projects.map((project, index) => (
                        <ProjectPlanet
                            key={project.id}
                            project={project}
                            index={index}
                            total={projects.length}
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                        />
                    ))}
                </CameraRig>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                />

                <SceneEffects />
            </Canvas>

            <ProjectInfoPanel
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default ProjectsCanvas;