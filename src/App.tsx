import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './stores';
import { setTheme } from './stores/themeSlice';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const themeClasses = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('appTheme');
    if (savedTheme && savedTheme !== currentTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch, currentTheme]);

  return (
    <div className={`min-h-screen ${themeClasses.bodyBg} ${themeClasses.textColor} ${themeClasses.fontFamily} ${themeClasses.transition} flex flex-col`}>
      <Header />
      <main className="flex-grow pt-20 p-4 flex justify-center items-start">
        <div className="container mx-auto max-w-4xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;