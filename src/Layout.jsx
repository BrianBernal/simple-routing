import { Link, Outlet, useLocation } from 'react-router-dom'

const pages = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const links = pages.filter((page) => page.path !== pathname)

  return (
    <div className="layout">
      <header className="site-header">
        <span className="brand">simple-routing</span>
        <nav className="nav" aria-label="Pages">
          {links.map((page) => (
            <Link key={page.path} to={page.path} className="nav-button">
              {page.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>4 pages, 3 links each, 4 different list orders.</span>
      </footer>
    </div>
  )
}
