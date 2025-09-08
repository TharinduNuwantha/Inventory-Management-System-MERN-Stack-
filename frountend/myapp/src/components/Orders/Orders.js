import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample order data
  const orders = [
    { id: 'ORD-1001', customer: 'John Smith', date: '2023-10-15', status: 'completed', total: '$245.99', items: 5 },
    { id: 'ORD-1002', customer: 'Sarah Johnson', date: '2023-10-16', status: 'processing', total: '$189.50', items: 3 },
    { id: 'ORD-1003', customer: 'Mike Wilson', date: '2023-10-16', status: 'pending', total: '$78.25', items: 2 },
    { id: 'ORD-1004', customer: 'Emily Davis', date: '2023-10-17', status: 'completed', total: '$342.75', items: 8 },
    { id: 'ORD-1005', customer: 'David Brown', date: '2023-10-17', status: 'processing', total: '$125.00', items: 4 },
    { id: 'ORD-1006', customer: 'Lisa Miller', date: '2023-10-18', status: 'pending', total: '$56.90', items: 2 },
    { id: 'ORD-1007', customer: 'Robert Taylor', date: '2023-10-18', status: 'shipped', total: '$210.45', items: 6 },
    { id: 'ORD-1008', customer: 'Jennifer Lee', date: '2023-10-19', status: 'completed', total: '$175.30', items: 3 }
  ];

  // Filter orders based on active tab
  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  const getStatusClass = (status) => {
    switch(status) {
      case 'completed': return 'status-completed';
      case 'processing': return 'status-processing';
      case 'pending': return 'status-pending';
      case 'shipped': return 'status-shipped';
      default: return '';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return 'fas fa-check-circle';
      case 'processing': return 'fas fa-cog';
      case 'pending': return 'fas fa-clock';
      case 'shipped': return 'fas fa-shipping-fast';
      default: return '';
    }
  };

  return (
    <div className="orders">
      <div className="orders-header">
        <h1 className="page-title">Order Management</h1>
        <button className="btn btn-primary">
          <i className="fas fa-plus"></i> Create New Order
        </button>
      </div>

      <div className="orders-stats">
        <div className="stat-card">
          <div className="stat-icon total-orders">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="stat-content">
            <h3>{orders.length}</h3>
            <p>Total Orders</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon pending-orders">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <h3>{orders.filter(o => o.status === 'pending').length}</h3>
            <p>Pending Orders</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon processing-orders">
            <i className="fas fa-cog"></i>
          </div>
          <div className="stat-content">
            <h3>{orders.filter(o => o.status === 'processing').length}</h3>
            <p>Processing Orders</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon completed-orders">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <h3>{orders.filter(o => o.status === 'completed').length}</h3>
            <p>Completed Orders</p>
          </div>
        </div>
      </div>

      <div className="orders-content">
        <div className="orders-filters">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search orders..." />
          </div>
          
          <div className="filter-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Orders
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
              onClick={() => setActiveTab('pending')}
            >
              Pending
            </button>
            <button 
              className={`tab-btn ${activeTab === 'processing' ? 'active' : ''}`}
              onClick={() => setActiveTab('processing')}
            >
              Processing
            </button>
            <button 
              className={`tab-btn ${activeTab === 'shipped' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipped')}
            >
              Shipped
            </button>
            <button 
              className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </button>
          </div>
          
          <div className="filter-controls">
            <select className="filter-select">
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Total: High-Low</option>
              <option>Sort by: Total: Low-High</option>
            </select>
            
            <button className="btn btn-outline">
              <i className="fas fa-filter"></i> Filters
            </button>
          </div>
        </div>

        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td>
                    <span className="order-id">{order.id}</span>
                  </td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.items} items</td>
                  <td className="order-total">{order.total}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(order.status)}`}>
                      <i className={getStatusIcon(order.status)}></i>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View Details">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn-icon" title="Edit Order">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-icon" title="Print Invoice">
                        <i className="fas fa-print"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="orders-footer">
          <div className="pagination-info">
            Showing {filteredOrders.length} of {orders.length} orders
          </div>
          <div className="pagination-controls">
            <button className="btn btn-outline" disabled>
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <span className="pagination-page">Page 1 of 1</span>
            <button className="btn btn-outline" disabled>
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;