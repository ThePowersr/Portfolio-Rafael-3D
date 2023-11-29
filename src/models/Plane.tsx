import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const playAnimation = () => {
      actions["Take 001"]?.play();
      requestAnimationFrame(playAnimation);
    };
    playAnimation();

    // Limpia cualquier recurso cuando el componente se desmonta
    return () => {
      actions["Take 001"]?.stop();
      actions["Take 001"]?.reset();
    };
  }, [actions]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane
