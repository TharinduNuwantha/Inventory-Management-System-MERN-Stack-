import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
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
            <a href="#" className="nav-link active">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-boxes"></i>
              <span>Inventory</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
              <span>Orders</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-chart-bar"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-users"></i>
              <span>Suppliers</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-user-circle"></i>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;