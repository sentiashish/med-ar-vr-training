import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { InteractiveHeart } from './InteractiveHeart'

export function AnatomyViewer() {
  return (
    <div className="anatomy-viewer-wrap">
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#f8fbff']} />

        <PerspectiveCamera makeDefault position={[0, 0.2, 3.3]} fov={45} />

        <ambientLight intensity={0.7} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.3}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <hemisphereLight intensity={0.45} color="#ffffff" groundColor="#bfdbfe" />

        <Suspense fallback={null}>
          <InteractiveHeart />
        </Suspense>

        <OrbitControls enablePan enableZoom enableRotate dampingFactor={0.08} />
      </Canvas>
    </div>
  )
}
