import React from 'react';
import './Inventory.css';

const Inventory = () => {
  // Sample inventory data
  const inventoryItems = [
    { id: 1, name: 'Organic Apples', category: 'Fruits', stock: 150, price: '$2.99', status: 'In Stock' },
    { id: 2, name: 'Bananas', category: 'Fruits', stock: 200, price: '$1.49', status: 'In Stock' },
    { id: 3, name: 'Carrots', category: 'Vegetables', stock: 75, price: '$0.99', status: 'Low Stock' },
    { id: 4, name: 'Broccoli', category: 'Vegetables', stock: 60, price: '$1.79', status: 'In Stock' },
    { id: 5, name: 'Milk', category: 'Dairy', stock: 30, price: '$3.49', status: 'Low Stock' },
    { id: 6, name: 'Eggs', category: 'Dairy', stock: 45, price: '$2.29', status: 'In Stock' },
    { id: 7, name: 'Whole Wheat Bread', category: 'Bakery', stock: 25, price: '$2.99', status: 'Low Stock' },
    { id: 8, name: 'Orange Juice', category: 'Beverages', stock: 40, price: '$3.99', status: 'In Stock' }
  ];

  return (
    <div className="inventory">
      <div className="inventory-header">
        <h1 className="page-title">Inventory Management</h1>
        <button className="btn btn-primary">
          <i className="fas fa-plus"></i> Add New Item
        </button>
      </div>

      <div className="inventory-filters">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search inventory..." />
        </div>
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Beverages">Beverages</option>
        </select>
        <select className="filter-select">
          <option value="">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`status-badge ${item.status.replace(' ', '-').toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn-icon" title="Delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="inventory-footer">
        <div className="pagination-info">
          Showing 1-8 of 8 items
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
  );
};

export default Inventory;