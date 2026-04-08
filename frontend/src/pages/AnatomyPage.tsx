import { PageSection } from '../components/common/PageSection'
import { AnatomyInfoPanel } from '../modules/anatomy/components/AnatomyInfoPanel'
import { AnatomyViewer } from '../modules/anatomy/components/AnatomyViewer'
import { useAnatomyStore } from '../modules/anatomy/store/anatomyStore'

export function AnatomyPage() {
  const { selectedPartId, hoveredPartId, clearSelection } = useAnatomyStore()

  return (
    <PageSection
      title="Anatomy Viewer"
      description="Rotate, zoom, pan, and click heart structures to inspect medically reviewed anatomy facts."
    >
      <div className="anatomy-layout">
        <AnatomyViewer />
        <div className="anatomy-side-panel">
          <AnatomyInfoPanel selectedPartId={selectedPartId} hoveredPartId={hoveredPartId} />
          <button className="action-button" onClick={clearSelection} type="button">
            Reset Selection
          </button>
        </div>
      </div>
    </PageSection>
  )
}
