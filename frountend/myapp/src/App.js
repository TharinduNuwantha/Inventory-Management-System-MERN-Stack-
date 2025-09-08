import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/Inventory';
import './App.css';
import Register from './components/SignIn/Register';
import SignIn from './components/SignIn/SignIn';
import { Header } from './components/NavHeader/Header';
import Orders from './components/Orders/Orders';
import Analytics from './components/Analytics/Analytics';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [activeAuth, setActiveAuth] = useState('signin'); // 'signin' or 'register'

  const renderContent = () => {
    
    switch(activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'orders':
        return <Orders/>;
      case 'analytics':
        return <Analytics/>;
      case 'suppliers':
        return <div className="content-placeholder">
                 <i className="fas fa-users"></i>
                 <h2>Suppliers Section</h2>
                 <p>This section is under development.</p>
               </div>;
      case 'settings':
        return <div className="content-placeholder">
                 <i className="fas fa-cog"></i>
                 <h2>Settings Section</h2>
                 <p>This section is under development.</p>
               </div>;
      case 'profile':
        return (activeAuth === 'signin' ? <SignIn switchAuth={()=>setActiveAuth('register')} /> : <Register switchAuth={()=>setActiveAuth('signin')} />);
      default:
        return <Dashboard />;
    }
  };

  const isActive = (page) => {
    return activePage === page ? 'active' : '';
  };

  return (
    <div className="app-container">
      
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-container">
          <a href="#" className="logo">
            <i className="fas fa-store"></i>
            <span>SuperFresh</span>
          </a>
        </div>
        
        <ul className="nav-links">
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('dashboard')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('dashboard');
              }}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('inventory')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('inventory');
              }}
            >
              <i className="fas fa-boxes"></i>
              <span>Inventory</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('orders')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('orders');
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span>Orders</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('analytics')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('analytics');
              }}
            >
              <i className="fas fa-chart-bar"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('suppliers')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('suppliers');
              }}
            >
              <i className="fas fa-users"></i>
              <span>Suppliers</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('settings')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('settings');
              }}
            >
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${isActive('profile')}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage('profile');
              }}
            >
              <i className="fas fa-user-circle"></i>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Header />
        {renderContent()}
      </main>
    </div>
  );
}

export default App;