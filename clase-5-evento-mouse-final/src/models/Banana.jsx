import React, { useRef,useState } from "react";
import { useGLTF } from "@react-three/drei";
import { meshBounds, useVideoTexture } from "@react-three/drei";

export default function Lemon(props) {
  const [play, setPlay] = useState(false);
  const lemonRef = useRef(null);
  const videoTexture = useVideoTexture("/static/china.mp4", {
    muted: false,
    start: play,
    loop: false,
  });
  const onHandleBanana = (event) => {
    setPlay(!play);
  }
  return (
    <group ref={lemonRef} {...props} dispose={null} onClick={onHandleBanana}>
      <mesh receiveShadow={true} scale={6} raycast={meshBounds} >
        <mesh scale={3}>
          <planeGeometry />
          <meshBasicMaterial map={videoTexture}  toneMapped={false}/>
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/static/lemon.glb");