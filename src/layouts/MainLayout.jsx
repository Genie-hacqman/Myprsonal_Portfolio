// MainLayout.jsx wraps every page with the header, footer, and shared layout styles.

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = ({ darkMode, toggleDarkMode, children }) => {
  return (
    <div id="top" className="min-h-screen bg-slate-100 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

      {/* Navbar receives the theme state and toggle handler. */}


      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Render nested routes or children content inside the page body. */}


      <main>{children ?? <Outlet />}</main>

      {/* Footer and back-to-top support. */}

      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
