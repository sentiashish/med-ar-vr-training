export type HeartPart = {
  id: string
  label: string
  description: string
  oxygenation: 'oxygenated' | 'deoxygenated' | 'mixed'
  flowDirection: string
  color: string
  position: [number, number, number]
}

export const heartParts: HeartPart[] = [
  {
    id: 'left-atrium',
    label: 'Left Atrium',
    description:
      'Receives oxygenated blood from the pulmonary veins and transfers it through the mitral valve to the left ventricle.',
    oxygenation: 'oxygenated',
    flowDirection: 'Pulmonary veins -> Left atrium -> Mitral valve -> Left ventricle',
    color: '#dc2626',
    position: [0.35, 0.55, 0],
  },
  {
    id: 'right-atrium',
    label: 'Right Atrium',
    description:
      'Receives deoxygenated blood from the superior and inferior vena cava, then passes it through the tricuspid valve to the right ventricle.',
    oxygenation: 'deoxygenated',
    flowDirection: 'SVC/IVC -> Right atrium -> Tricuspid valve -> Right ventricle',
    color: '#1d4ed8',
    position: [-0.4, 0.52, 0],
  },
  {
    id: 'left-ventricle',
    label: 'Left Ventricle',
    description:
      'The thickest ventricular chamber; generates high pressure to pump oxygenated blood through the aortic valve into systemic circulation.',
    oxygenation: 'oxygenated',
    flowDirection: 'Left ventricle -> Aortic valve -> Aorta -> Body tissues',
    color: '#b91c1c',
    position: [0.3, -0.2, 0.08],
  },
  {
    id: 'right-ventricle',
    label: 'Right Ventricle',
    description:
      'Pumps deoxygenated blood through the pulmonary valve into the pulmonary trunk and pulmonary arteries toward the lungs.',
    oxygenation: 'deoxygenated',
    flowDirection: 'Right ventricle -> Pulmonary valve -> Pulmonary artery -> Lungs',
    color: '#2563eb',
    position: [-0.28, -0.24, 0.02],
  },
  {
    id: 'aorta',
    label: 'Aorta',
    description: 'Largest systemic artery carrying oxygenated blood from the left ventricle to major body circulations.',
    oxygenation: 'oxygenated',
    flowDirection: 'Aortic root -> Ascending aorta -> Arch -> Descending aorta',
    color: '#b91c1c',
    position: [0.18, 0.95, 0.05],
  },
  {
    id: 'pulmonary-artery',
    label: 'Pulmonary Artery',
    description:
      'Carries deoxygenated blood from the right ventricle to the lungs; it is an artery with low oxygen content.',
    oxygenation: 'deoxygenated',
    flowDirection: 'Pulmonary trunk -> Right/Left pulmonary arteries -> Lungs',
    color: '#1d4ed8',
    position: [-0.22, 0.88, 0.08],
  },
  {
    id: 'vena-cava',
    label: 'Vena Cava',
    description:
      'Superior and inferior vena cava return deoxygenated blood from systemic circulation into the right atrium.',
    oxygenation: 'deoxygenated',
    flowDirection: 'Body tissues -> SVC/IVC -> Right atrium',
    color: '#2563eb',
    position: [-0.62, 0.65, 0],
  },
]

export const heartPartMap = new Map(heartParts.map((part) => [part.id, part]))
