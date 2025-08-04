import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import { MODULES } from './constants';
import { LoaderIcon } from './components/ui/Icons';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

const App: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('loading');
  const [userType, setUserType] = useState<'full' | 'demo'>('full');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('intro');

  const selectedModule = MODULES.find(m => m.id === selectedModuleId);

  // Centralized function to sync auth state from localStorage
  const syncAuthState = () => {
    const isLoggedIn = localStorage.getItem('language_maestro_loggedin') === 'true';
    if (isLoggedIn) {
      const type = (localStorage.getItem('language_maestro_usertype') as 'full' | 'demo') || 'full';
      setUserType(type);
      setAuthStatus('authenticated');
    } else {
      setAuthStatus('unauthenticated');
    }
  };

  useEffect(() => {
    // 1. Check for a successful payment redirection on initial load
    const urlParams = new URLSearchParams(window.location.search);
    const isPaymentSuccess = urlParams.get('payment_success') === 'true';
    const pendingEmail = sessionStorage.getItem('pending_payment_email');

    if (isPaymentSuccess && pendingEmail) {
      const users = JSON.parse(localStorage.getItem('language_maestro_users') || '[]');
      const userIndex = users.findIndex((user: any) => user.email === pendingEmail);
      
      if (userIndex !== -1) {
        // Update user to paid and set login state in localStorage
        users[userIndex].paid = true;
        localStorage.setItem('language_maestro_users', JSON.stringify(users));
        localStorage.setItem('language_maestro_loggedin', 'true');
        localStorage.setItem('language_maestro_usertype', 'full');
        
        // Clean up for a smooth transition
        sessionStorage.removeItem('pending_payment_email');
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
    
    // 2. Sync state from localStorage (covers payment, existing sessions, etc.)
    syncAuthState(); 

    // 3. Add listener for cross-tab synchronization
    window.addEventListener('storage', syncAuthState);
    return () => {
      window.removeEventListener('storage', syncAuthState);
    };
  }, []); // Runs only once on component mount

  const handleLogin = () => {
    syncAuthState();
  };

  const handleLogout = () => {
    localStorage.removeItem('language_maestro_loggedin');
    localStorage.removeItem('language_maestro_usertype');
    syncAuthState(); // This will set status to 'unauthenticated'
  };

  if (authStatus === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <LoaderIcon className="h-12 w-12 text-indigo-600" />
      </div>
    );
  }

  if (authStatus === 'unauthenticated') {
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
