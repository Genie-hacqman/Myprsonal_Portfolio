

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = ({ darkMode, toggleDarkMode, children }) => {
  return (
    <div id="top" className="min-h-screen bg-slate-100 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

      {}


      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {}


      <main>{children ?? <Outlet />}</main>

      {}

      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
