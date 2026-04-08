import { create } from 'zustand'

type AnatomyState = {
  selectedPartId: string | null
  hoveredPartId: string | null
  setSelectedPart: (partId: string | null) => void
  setHoveredPart: (partId: string | null) => void
  clearSelection: () => void
}

export const useAnatomyStore = create<AnatomyState>((set) => ({
  selectedPartId: null,
  hoveredPartId: null,
  setSelectedPart: (partId) => set({ selectedPartId: partId }),
  setHoveredPart: (partId) => set({ hoveredPartId: partId }),
  clearSelection: () => set({ selectedPartId: null, hoveredPartId: null }),
}))
