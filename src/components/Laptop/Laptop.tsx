import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useState, useEffect } from "react";

const Laptop = () => {
  const [zoom, setZoom] = useState(getZoomValue(window.innerWidth));
  useEffect(() => {
    const handleResize = () => {
      setZoom(getZoomValue(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getZoomValue(width: number) {
    if (width < 600) return 70; // xs
    if (width < 900) return 90; // sm
    if (width < 1200) return 110; // md
    return 130; // lg
  }
  return (
    <Canvas style={{ height: "60vh" }}>
      <OrthographicCamera makeDefault position={[0, 35, 140]} zoom={zoom} />
      <OrbitControls enabled={false} />
      <pointLight
        intensity={200}
        position={[0, 3, 1.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        intensity={120}
        position={[0, 3, 5.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Model />
    </Canvas>
  );
};

export default Laptop;
