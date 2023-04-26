import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/molecule.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[60, 33, 60]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-20, 33, -20]}
        angle={0.13}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[-0.01, 0.9, -0.1]}
      />
    </mesh>
  );
};

const Benzene = ({ isMobile }) => {
  const benzene = useGLTF("./desktop_pc/moleculeBenz.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <spotLight
        position={[-20, 33, -20]}
        angle={0.13}
        penumbra={1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <primitive
        object={benzene.scene}
        scale={isMobile ? 0.6 : 0.65}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[-0, 0.9, -0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, -20, -35], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Benzene isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
