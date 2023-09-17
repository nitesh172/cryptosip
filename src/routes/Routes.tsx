import { Drawer, Footer, Navbar } from 'components'
import { ScrollToTopComponent } from 'hooks/ScrollToTop'
import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import RequireAuth from 'hooks/RequireAuth'
const Home = lazy(() => import('pages/home/Home'))
const About = lazy(() => import('pages/about/About'))
const Contact = lazy(() => import('pages/contact/Contact'))
const Auth = lazy(() => import('pages/auth/Auth'))
const Usermgmt = lazy(() => import('pages/email/UserMangement'))
const Profile = lazy(() => import('pages/profile/Profile'))
const Cookies = lazy(() => import('pages/cookies/Cookies'))
const Page404 = lazy(() => import('pages/404/index'))

const ReactRoutes = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
    document.body.style.overflow = drawerOpen ? 'auto' : 'hidden'
  }

  return (
    <Router future={{ v7_startTransition: true }}>
      <ScrollToTopComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Auth />} />
          <Route path='/signup' element={<Auth />} />
          <Route path='/forgot-password' element={<Auth />} />
          <Route path='/usermgmt' element={<Usermgmt />} />
          <Route
            element={
              <>
                <Navbar toggleSidebar={toggleDrawer} />
                <Drawer handleDrawer={toggleDrawer} openDrawer={drawerOpen} />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cookie-policy' element={<Cookies />} />
            <Route element={<RequireAuth />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/:tab' element={<Profile />} />
            </Route>
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default ReactRoutes
