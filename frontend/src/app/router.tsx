import { Suspense, lazy, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { LearnPage } from '../pages/LearnPage'
import { LoginPage } from '../pages/LoginPage'

const AnatomyPage = lazy(async () => {
  const module = await import('../pages/AnatomyPage')
  return { default: module.AnatomyPage }
})

const ARModePage = lazy(async () => {
  const module = await import('../pages/ARModePage')
  return { default: module.ARModePage }
})

const VRModePage = lazy(async () => {
  const module = await import('../pages/VRModePage')
  return { default: module.VRModePage }
})

const Scene360Page = lazy(async () => {
  const module = await import('../pages/Scene360Page')
  return { default: module.Scene360Page }
})

function withPageFallback(page: ReactNode) {
  return <Suspense fallback={<div className="placeholder-card">Loading module...</div>}>{page}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'learn', element: <LearnPage /> },
      { path: 'anatomy', element: withPageFallback(<AnatomyPage />) },
      { path: 'ar-mode', element: withPageFallback(<ARModePage />) },
      { path: 'vr-mode', element: withPageFallback(<VRModePage />) },
      { path: 'training-360', element: withPageFallback(<Scene360Page />) },
      { path: 'login', element: <LoginPage /> },
    ],
  },
])
