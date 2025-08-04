import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import { MODULES } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('language_maestro_loggedin') === 'true';
  });

  const [userType, setUserType] = useState<'full' | 'demo'>(() => {
    return (localStorage.getItem('language_maestro_usertype') as 'full' | 'demo') || 'full';
  });
  
  const [selectedModuleId, setSelectedModuleId] = useState<string>('intro');

  const selectedModule = MODULES.find(m => m.id === selectedModuleId);

  // This effect runs once on app load to check for successful payment redirection.
  useEffect(() => {
    const checkPaymentSuccess = () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('payment_success') === 'true') {
        const pendingEmail = sessionStorage.getItem('pending_payment_email');
        if (pendingEmail) {
          // Update user status to paid
          const users = JSON.parse(localStorage.getItem('language_maestro_users') || '[]');
          const userIndex = users.findIndex((user: any) => user.email === pendingEmail);
          
          if (userIndex !== -1) {
            users[userIndex].paid = true;
            localStorage.setItem('language_maestro_users', JSON.stringify(users));
            
            // Log the user in automatically
            localStorage.setItem('language_maestro_loggedin', 'true');
            localStorage.setItem('language_maestro_usertype', 'full');
            setIsAuthenticated(true);
            setUserType('full');

            // Clean up session storage and URL
            sessionStorage.removeItem('pending_payment_email');
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        }
      }
    };
    
    checkPaymentSuccess();
  }, []); // Empty dependency array ensures this runs only once on mount.

  const refreshAuthState = () => {
    const loggedIn = localStorage.getItem('language_maestro_loggedin') === 'true';
    const type = (localStorage.getItem('language_maestro_usertype') as 'full' | 'demo') || 'full';
    setIsAuthenticated(loggedIn);
    setUserType(type);
  }

  const handleLogin = () => {
    refreshAuthState();
  };

  const handleLogout = () => {
    localStorage.removeItem('language_maestro_loggedin');
    localStorage.removeItem('language_maestro_usertype');
    refreshAuthState();
  };
  
  // A side effect to sync auth state across tabs
  useEffect(() => {
    window.addEventListener('storage', refreshAuthState);
    return () => window.removeEventListener('storage', refreshAuthState);
  }, []);

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      <Sidebar 
        selectedModuleId={selectedModuleId} 
        onSelectModule={setSelectedModuleId}
        onLogout={handleLogout}
        userType={userType}
      />
      <Dashboard module={selectedModule} />
    </div>
  );
};

export default App;