import {
  Outlet,
  RouterProvider,
  ReactRouter,
  Route,
  RootRoute,
} from '@tanstack/react-router'

import Container from '@mui/material/Container'

import Header from './Header'
import Footer from './Footer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Men from './pages/Men'
import Women from './pages/Women'
import About from './pages/About'

function Root() {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <main className="min-h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </>
  )
}

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})
const shopRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shop',
  component: Shop,
})
const menRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/men',
  component: Men,
})
const womenRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/women',
  component: Women,
})
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  menRoute,
  womenRoute,
  aboutRoute,
])
const router = new ReactRouter({ routeTree })

function App() {
  return <RouterProvider router={router} />
}

export default App
