import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Mesh, MeshStandardMaterial } from 'three'
import { Color } from 'three'
import { heartPartMap } from '../data/heartParts'
import { useAnatomyStore } from '../store/anatomyStore'

type PartConfig = {
  id: string
  geometry: 'sphere' | 'cylinder'
  args: number[]
  scale?: [number, number, number]
  rotation?: [number, number, number]
}

const partConfigs: PartConfig[] = [
  { id: 'left-atrium', geometry: 'sphere', args: [0.25, 32, 32], scale: [1, 0.85, 1] },
  { id: 'right-atrium', geometry: 'sphere', args: [0.23, 32, 32], scale: [1, 0.85, 1] },
  { id: 'left-ventricle', geometry: 'sphere', args: [0.37, 32, 32], scale: [1, 1.15, 1] },
  { id: 'right-ventricle', geometry: 'sphere', args: [0.3, 32, 32], scale: [1, 1.05, 1] },
  { id: 'aorta', geometry: 'cylinder', args: [0.1, 0.11, 0.55, 24], rotation: [0.2, 0, -0.35] },
  {
    id: 'pulmonary-artery',
    geometry: 'cylinder',
    args: [0.08, 0.09, 0.5, 24],
    rotation: [0.35, 0, 0.45],
  },
  { id: 'vena-cava', geometry: 'cylinder', args: [0.08, 0.08, 0.6, 24], rotation: [0.1, 0, 0.25] },
]

function HeartPartMesh({ config }: { config: PartConfig }) {
  const meshRef = useRef<Mesh>(null)
  const { selectedPartId, hoveredPartId, setSelectedPart, setHoveredPart } = useAnatomyStore()
  const partMeta = heartPartMap.get(config.id)
  const isSelected = selectedPartId === config.id
  const isHovered = hoveredPartId === config.id

  const baseColor = useMemo(() => new Color(partMeta?.color ?? '#ef4444'), [partMeta?.color])

  useFrame((_state, delta) => {
    const mesh = meshRef.current
    if (!mesh) return

    const material = mesh.material as MeshStandardMaterial
    material.color.lerp(baseColor, Math.min(1, 6 * delta))

    const targetEmissive = isSelected ? 0.55 : isHovered ? 0.3 : 0.08
    material.emissive.set('#fef08a')
    material.emissiveIntensity += (targetEmissive - material.emissiveIntensity) * Math.min(1, 8 * delta)

    const baseScale = config.scale ?? [1, 1, 1]
    const targetScale = isSelected ? 1.08 : isHovered ? 1.04 : 1
    mesh.scale.x += (baseScale[0] * targetScale - mesh.scale.x) * Math.min(1, 10 * delta)
    mesh.scale.y += (baseScale[1] * targetScale - mesh.scale.y) * Math.min(1, 10 * delta)
    mesh.scale.z += (baseScale[2] * targetScale - mesh.scale.z) * Math.min(1, 10 * delta)
  })

  return (
    <mesh
      ref={meshRef}
      name={config.id}
      position={partMeta?.position}
      rotation={config.rotation}
      onPointerOver={(event) => {
        event.stopPropagation()
        setHoveredPart(config.id)
      }}
      onPointerOut={(event) => {
        event.stopPropagation()
        setHoveredPart(null)
      }}
      onClick={(event) => {
        event.stopPropagation()
        setSelectedPart(config.id)
      }}
    >
      {config.geometry === 'sphere' ? (
        <sphereGeometry args={config.args as [number, number, number]} />
      ) : (
        <cylinderGeometry args={config.args as [number, number, number, number]} />
      )}
      <meshStandardMaterial color={partMeta?.color ?? '#ef4444'} roughness={0.45} metalness={0.15} />
    </mesh>
  )
}

export function InteractiveHeart() {
  const { selectedPartId } = useAnatomyStore()
  const selectedPart = selectedPartId ? heartPartMap.get(selectedPartId) : null

  return (
    <group position={[0, 0, 0]}>
      {partConfigs.map((config) => (
        <HeartPartMesh key={config.id} config={config} />
      ))}

      {selectedPart && (
        <Html position={[selectedPart.position[0], selectedPart.position[1] + 0.28, selectedPart.position[2]]} center>
          <div className="heart-floating-label">{selectedPart.label}</div>
        </Html>
      )}

      <mesh position={[0, -0.85, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.7, 64]} />
        <meshStandardMaterial color="#dbeafe" />
      </mesh>
    </group>
  )
}
