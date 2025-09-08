import React from 'react';
import './Dashboard.css';
import { Header } from '../NavHeader/Header';

const Dashboard = () => {
  return (
    <div className="dashboard">
 

      <div className="dashboard-cards">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Total Products</h3>
            <div className="card-icon blue">
              <i className="fas fa-box"></i>
            </div>
          </div>
          <div className="card-value">1,248</div>
          <p className="card-description">+12% from last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Low Stock</h3>
            <div className="card-icon orange">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <div className="card-value">42</div>
          <p className="card-description">Items need restocking</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">This Month Orders</h3>
            <div className="card-icon green">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <div className="card-value">326</div>
          <p className="card-description">+8% from last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Revenue</h3>
            <div className="card-icon purple">
              <i className="fas fa-dollar-sign"></i>
            </div>
          </div>
          <div className="card-value">$24,568</div>
          <p className="card-description">Current month revenue</p>
        </div>
      </div>

      <div className="recent-activity">
        <div className="section-header">
          <h2 className="section-title">Recent Activity</h2>
          <a href="#" className="view-all">View All</a>
        </div>

        <ul className="activity-list">
          <li className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-plus"></i>
            </div>
            <div className="activity-content">
              <h3 className="activity-title">New product added</h3>
              <p className="activity-desc">Organic Avocados added to inventory</p>
              <span className="activity-time">10 minutes ago</span>
            </div>
          </li>

          <li className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="activity-content">
              <h3 className="activity-title">New order placed</h3>
              <p className="activity-desc">Order #ORD-4782 for $245.99</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </li>

          <li className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-truck-loading"></i>
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Shipment received</h3>
              <p className="activity-desc">Received shipment from FreshFarms Inc.</p>
              <span className="activity-time">Yesterday</span>
            </div>
          </li>

          <li className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Low stock alert</h3>
              <p className="activity-desc">Organic Blueberries running low</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;