import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import { MODULES } from './constants';

const App: React.FC = () => {
  // Check localStorage for logged-in status on initial load
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('language_maestro_loggedin') === 'true';
  });
  const [selectedModuleId, setSelectedModuleId] = useState<string>('intro');

  const selectedModule = MODULES.find(m => m.id === selectedModuleId);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('language_maestro_loggedin');
    setIsAuthenticated(false);
  };
  
  // A side effect to sync auth state across tabs
  useEffect(() => {
    const checkAuth = () => {
        const loggedIn = localStorage.getItem('language_maestro_loggedin') === 'true';
        if (loggedIn !== isAuthenticated) {
            setIsAuthenticated(loggedIn);
        }
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      <Sidebar 
        selectedModuleId={selectedModuleId} 
        onSelectModule={setSelectedModuleId}
        onLogout={handleLogout}
      />
      <Dashboard module={selectedModule} />
    </div>
  );
};

export default App;