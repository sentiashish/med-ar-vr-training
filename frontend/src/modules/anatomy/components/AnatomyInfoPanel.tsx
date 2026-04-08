import { heartPartMap } from '../data/heartParts'

type AnatomyInfoPanelProps = {
  selectedPartId: string | null
  hoveredPartId: string | null
}

export function AnatomyInfoPanel({ selectedPartId, hoveredPartId }: AnatomyInfoPanelProps) {
  const activePartId = selectedPartId ?? hoveredPartId
  const activePart = activePartId ? heartPartMap.get(activePartId) : null

  return (
    <aside className="anatomy-info-panel">
      <h3>Heart Part Info</h3>
      {!activePart ? (
        <p className="muted-text">Select a part of the heart to view details.</p>
      ) : (
        <>
          <p className="part-label">{activePart.label}</p>
          <p>{activePart.description}</p>
          <div className="oxygenation-badge-row">
            <span className="muted-text">Blood type:</span>
            <span className={`oxygenation-badge oxygenation-${activePart.oxygenation}`}>
              {activePart.oxygenation}
            </span>
          </div>
          <p className="flow-text">
            <strong>Flow:</strong> {activePart.flowDirection}
          </p>
          <div className="part-color-row">
            <span
              className="part-color-dot"
              style={{ backgroundColor: activePart.color }}
              aria-hidden="true"
            />
            <span>Clinical color code</span>
          </div>
          <p className="panel-note">
            Verified educational facts shown here. 3D geometry is currently schematic and will be replaced with
            a medically accurate heart mesh in the next upgrade.
          </p>
        </>
      )}
    </aside>
  )
}
