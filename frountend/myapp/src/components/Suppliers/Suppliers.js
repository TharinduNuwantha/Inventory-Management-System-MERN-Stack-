import React, { useState } from 'react';
import './Suppliers.css';

const Suppliers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAddSupplier, setShowAddSupplier] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);

  // Sample suppliers data
  const suppliers = [
    {
      id: 1,
      name: 'Fresh Farms Co.',
      contact: 'John Farmer',
      email: 'john@freshfarms.com',
      phone: '(555) 123-4567',
      products: ['Vegetables', 'Fruits'],
      status: 'active',
      rating: 4.8,
      orders: 45,
      lastOrder: '2023-10-15'
    },
    {
      id: 2,
      name: 'Dairy Delights',
      contact: 'Sarah Milkman',
      email: 'sarah@dairydelights.com',
      phone: '(555) 234-5678',
      products: ['Dairy', 'Eggs'],
      status: 'active',
      rating: 4.5,
      orders: 32,
      lastOrder: '2023-10-14'
    },
    {
      id: 3,
      name: 'Organic Harvest',
      contact: 'Mike Green',
      email: 'mike@organicharvest.com',
      phone: '(555) 345-6789',
      products: ['Organic Vegetables', 'Organic Fruits'],
      status: 'active',
      rating: 4.9,
      orders: 28,
      lastOrder: '2023-10-13'
    },
    {
      id: 4,
      name: 'Bakery Essentials',
      contact: 'Lisa Baker',
      email: 'lisa@bakeryessentials.com',
      phone: '(555) 456-7890',
      products: ['Bread', 'Pastries'],
      status: 'inactive',
      rating: 4.2,
      orders: 19,
      lastOrder: '2023-09-20'
    },
    {
      id: 5,
      name: 'Beverage Distributors',
      contact: 'Robert Drinks',
      email: 'robert@beveragedist.com',
      phone: '(555) 567-8901',
      products: ['Juices', 'Water', 'Sodas'],
      status: 'active',
      rating: 4.6,
      orders: 37,
      lastOrder: '2023-10-12'
    },
    {
      id: 6,
      name: 'Meat Masters',
      contact: 'David Butcher',
      email: 'david@meatmasters.com',
      phone: '(555) 678-9012',
      products: ['Poultry', 'Beef', 'Pork'],
      status: 'pending',
      rating: 4.3,
      orders: 24,
      lastOrder: '2023-10-10'
    }
  ];

  // Filter suppliers based on active tab
  const filteredSuppliers = activeTab === 'all' 
    ? suppliers 
    : suppliers.filter(supplier => supplier.status === activeTab);

  const getStatusClass = (status) => {
    switch(status) {
      case 'active': return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'pending': return 'status-pending';
      default: return '';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return 'fas fa-check-circle';
      case 'inactive': return 'fas fa-times-circle';
      case 'pending': return 'fas fa-clock';
      default: return '';
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  const handleEditSupplier = (supplier) => {
    setEditingSupplier(supplier);
    setShowAddSupplier(true);
  };

  const handleAddSupplier = () => {
    setEditingSupplier(null);
    setShowAddSupplier(true);
  };

  const handleCloseModal = () => {
    setShowAddSupplier(false);
    setEditingSupplier(null);
  };

  return (
    <div className="suppliers">
      <div className="suppliers-header">
        <div className="header-left">
          <h1 className="page-title">Supplier Management</h1>
          <p className="page-subtitle">Manage your product suppliers and vendors</p>
        </div>
        <button className="btn btn-primary" onClick={handleAddSupplier}>
          <i className="fas fa-plus"></i> Add New Supplier
        </button>
      </div>

      <div className="suppliers-stats">
        <div className="stat-card">
          <div className="stat-icon total-suppliers">
            <i className="fas fa-truck-loading"></i>
          </div>
          <div className="stat-content">
            <h3>{suppliers.length}</h3>
            <p>Total Suppliers</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon active-suppliers">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <h3>{suppliers.filter(s => s.status === 'active').length}</h3>
            <p>Active Suppliers</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon pending-suppliers">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <h3>{suppliers.filter(s => s.status === 'pending').length}</h3>
            <p>Pending Suppliers</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon top-rated">
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-content">
            <h3>4.7</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </div>

      <div className="suppliers-content">
        <div className="suppliers-filters">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search suppliers..." />
          </div>
          
          <div className="filter-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Suppliers
            </button>
            <button 
              className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button 
              className={`tab-btn ${activeTab === 'inactive' ? 'active' : ''}`}
              onClick={() => setActiveTab('inactive')}
            >
              Inactive
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
              onClick={() => setActiveTab('pending')}
            >
              Pending
            </button>
          </div>
          
          <div className="filter-controls">
            <select className="filter-select">
              <option>Sort by: Name</option>
              <option>Sort by: Recent</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Orders</option>
            </select>
            
            <button className="btn btn-outline">
              <i className="fas fa-filter"></i> More Filters
            </button>
          </div>
        </div>

        <div className="suppliers-grid">
          {filteredSuppliers.map(supplier => (
            <div key={supplier.id} className="supplier-card">
              <div className="supplier-header">
                <div className="supplier-avatar">
                  {supplier.name.charAt(0)}
                </div>
                <div className="supplier-info">
                  <h3 className="supplier-name">{supplier.name}</h3>
                  <span className={`status-badge ${getStatusClass(supplier.status)}`}>
                    <i className={getStatusIcon(supplier.status)}></i>
                    {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}
                  </span>
                </div>
                <div className="supplier-rating">
                  <div className="stars">
                    {renderStars(supplier.rating)}
                  </div>
                  <span className="rating-value">{supplier.rating}</span>
                </div>
              </div>

              <div className="supplier-details">
                <div className="detail-item">
                  <i className="fas fa-user"></i>
                  <span>{supplier.contact}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-envelope"></i>
                  <span>{supplier.email}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <span>{supplier.phone}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-box"></i>
                  <span>{supplier.orders} orders</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-calendar"></i>
                  <span>Last order: {supplier.lastOrder}</span>
                </div>
              </div>

              <div className="supplier-products">
                <h4>Products Provided:</h4>
                <div className="product-tags">
                  {supplier.products.map((product, index) => (
                    <span key={index} className="product-tag">{product}</span>
                  ))}
                </div>
              </div>

              <div className="supplier-actions">
                <button className="btn-icon" title="View Details">
                  <i className="fas fa-eye"></i>
                </button>
                <button 
                  className="btn-icon" 
                  title="Edit Supplier"
                  onClick={() => handleEditSupplier(supplier)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn-icon" title="Send Message">
                  <i className="fas fa-envelope"></i>
                </button>
                <button className="btn-icon" title="Order History">
                  <i className="fas fa-history"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="suppliers-footer">
          <div className="pagination-info">
            Showing {filteredSuppliers.length} of {suppliers.length} suppliers
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

      {/* Add/Edit Supplier Modal */}
      {showAddSupplier && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingSupplier ? 'Edit Supplier' : 'Add New Supplier'}</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-content">
              <form className="supplier-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter company name"
                      defaultValue={editingSupplier?.name || ''}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Person *</label>
                    <input 
                      type="text" 
                      placeholder="Enter contact person"
                      defaultValue={editingSupplier?.contact || ''}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="Enter email address"
                      defaultValue={editingSupplier?.email || ''}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="Enter phone number"
                      defaultValue={editingSupplier?.phone || ''}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Products Provided *</label>
                  <input 
                    type="text" 
                    placeholder="Separate products with commas"
                    defaultValue={editingSupplier?.products.join(', ') || ''}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Status</label>
                    <select defaultValue={editingSupplier?.status || 'active'}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Rating</label>
                    <select defaultValue={editingSupplier?.rating || '4.5'}>
                      <option value="5">5 Stars</option>
                      <option value="4.5">4.5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3.5">3.5 Stars</option>
                      <option value="3">3 Stars</option>
                    </select>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-outline" onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingSupplier ? 'Update Supplier' : 'Add Supplier'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suppliers;