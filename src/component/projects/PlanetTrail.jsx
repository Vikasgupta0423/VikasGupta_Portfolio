import { Trail } from "@react-three/drei";

const PlanetTrail = ({ color, children }) => {
  return (
    <Trail
      width={1.5}
      length={8}
      color={color}
      attenuation={(t) => t * t}
    >
      {children}
    </Trail>
  );
};

export default PlanetTrail;