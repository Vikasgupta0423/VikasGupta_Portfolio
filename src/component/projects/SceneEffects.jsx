import {
  EffectComposer,
  Bloom,
  Vignette,
} from "@react-three/postprocessing";

const SceneEffects = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      <Vignette
        eskil={false}
        offset={0.15}
        darkness={0.8}
      />
    </EffectComposer>
  );
};

export default SceneEffects;