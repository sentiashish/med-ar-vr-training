import { PageSection } from '../components/common/PageSection'

const phaseChecklist = [
  'Anatomy viewer foundation',
  'Blood flow visualization system',
  'WebXR AR mode with hit test placement',
  'WebXR VR immersive mode',
  '360 medical scene hotspots',
  'Quiz and progress backend',
]

export function DashboardPage() {
  return (
    <PageSection
      title="Project Dashboard"
      description="Track progress of your AR/VR medical training mini project."
    >
      <ul className="checklist">
        {phaseChecklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageSection>
  )
}
