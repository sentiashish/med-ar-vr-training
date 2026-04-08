import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { ARModePage } from '../pages/ARModePage'
import { AnatomyPage } from '../pages/AnatomyPage'
import { DashboardPage } from '../pages/DashboardPage'
import { LearnPage } from '../pages/LearnPage'
import { LoginPage } from '../pages/LoginPage'
import { Scene360Page } from '../pages/Scene360Page'
import { VRModePage } from '../pages/VRModePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'learn', element: <LearnPage /> },
      { path: 'anatomy', element: <AnatomyPage /> },
      { path: 'ar-mode', element: <ARModePage /> },
      { path: 'vr-mode', element: <VRModePage /> },
      { path: 'training-360', element: <Scene360Page /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
])
