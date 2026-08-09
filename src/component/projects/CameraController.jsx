import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CameraController = ({ selectedProject }) => {
  const { camera } = useThree();

  const currentLookAt = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const defaultPosition = new THREE.Vector3(0, 0, 12);
    const defaultLookAt = new THREE.Vector3(0, 0, 0);

    // No project selected
    if (!selectedProject) {
      camera.position.lerp(defaultPosition, delta * 2);

      currentLookAt.current.lerp(defaultLookAt, delta * 2);

      camera.lookAt(currentLookAt.current);

      return;
    }

    const radius = 5;
    const orbitSpeed = 0.25 + selectedProject.index * 0.05;

    const angle =
      state.clock.elapsedTime * orbitSpeed +
      (selectedProject.index / selectedProject.total) *
        Math.PI *
        2;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y =
      Math.sin(state.clock.elapsedTime * 2 + selectedProject.index) *
      0.25;

    // Camera position behind the selected planet
    const targetPosition = new THREE.Vector3(
      x * 1.4,
      y + 1.2,
      z * 1.4
    );

    camera.position.lerp(targetPosition, delta * 2.5);

    currentLookAt.current.lerp(
      new THREE.Vector3(x, y, z),
      delta * 3
    );

    camera.lookAt(currentLookAt.current);
  });

  return null;
};

export default CameraController;