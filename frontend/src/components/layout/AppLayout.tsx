import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/learn', label: 'Learn' },
  { path: '/anatomy', label: 'Anatomy' },
  { path: '/ar-mode', label: 'AR Mode' },
  { path: '/vr-mode', label: 'VR Mode' },
  { path: '/training-360', label: '360 Scene' },
  { path: '/login', label: 'Login' },
]

export function AppLayout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="app-kicker">Mini Project 4</p>
          <h1 className="app-title">MedVision XR</h1>
        </div>
        <p className="app-subtitle">AR and VR medical training platform</p>
      </header>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
