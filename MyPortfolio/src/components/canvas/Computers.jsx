import {Suspense, useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import ComputersCanvas from './ComputersCanvas'

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./scifi_sphere/scene.gltf') //free 3d
  const rotationRef = useRef(0);

  useFrame(() => {
    computer.scene.rotation.y = rotationRef.current += 0.01;
  });

  return (
    <mesh>
      <hemisphereLight intensity={5.15} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 2: 3.5}
        position={isMobile ?[0-3,-2.2] :[0,-1.25,-1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
}

export default Computers;
