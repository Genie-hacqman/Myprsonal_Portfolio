// App.jsx is the root of the React app and controls global state like dark mode.

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function App() {
  // Track whether the app is in dark mode or light mode.

  const [darkMode, setDarkMode] = useState(false);

  // When darkMode changes, update the HTML root class so Tailwind dark styles apply.

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    // BrowserRouter enables client-side routing in the React app.

    <BrowserRouter>
      {/* MainLayout handles shared page chrome like the header and footer. */}

      <MainLayout darkMode={darkMode} toggleDarkMode={() => setDarkMode((prev) => !prev)}>
        <Routes>
          {/* Define the main pages and their routes. */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all route for unknown URLs. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
