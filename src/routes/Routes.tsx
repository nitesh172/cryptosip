import { Drawer, Navbar } from "components"
import { About, Contact, Home, Auth } from "pages"
import Admin from "pages/admin/Admin"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"

const ReactRoutes = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.style.overflow = sidebarOpen ? 'auto' : 'hidden';
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          element={
            <>
              <Navbar toggleSidebar={toggleSidebar} />
              <Drawer handleDrawer={toggleSidebar} openDrawer={sidebarOpen} />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default ReactRoutes
