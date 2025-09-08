import React, { useState } from 'react';
import './Analytics.css';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('month');

  // Sample data for charts and metrics
  const analyticsData = {
    overview: {
      revenue: 24568,
      orders: 326,
      customers: 184,
      averageOrder: 75.36
    },
    salesData: [
      { month: 'Jan', sales: 12000, orders: 145 },
      { month: 'Feb', sales: 18000, orders: 192 },
      { month: 'Mar', sales: 15000, orders: 168 },
      { month: 'Apr', sales: 21000, orders: 234 },
      { month: 'May', sales: 24568, orders: 326 },
      { month: 'Jun', sales: 22000, orders: 289 }
    ],
    topProducts: [
      { name: 'Organic Apples', sales: 5420, units: 1250 },
      { name: 'Fresh Milk', sales: 4320, units: 980 },
      { name: 'Free-range Eggs', sales: 3870, units: 1450 },
      { name: 'Whole Wheat Bread', sales: 3210, units: 1070 },
      { name: 'Organic Avocados', sales: 2980, units: 745 }
    ],
    categories: [
      { name: 'Fruits', value: 35, color: '#4361ee' },
      { name: 'Dairy', value: 25, color: '#4cc9f0' },
      { name: 'Bakery', value: 20, color: '#f72585' },
      { name: 'Vegetables', value: 15, color: '#7209b7' },
      { name: 'Beverages', value: 5, color: '#3a0ca3' }
    ]
  };

  // Calculate percentage changes
  const percentageChange = {
    revenue: 12.5,
    orders: 8.3,
    customers: 5.7,
    averageOrder: 3.2
  };

  const renderSalesChart = () => {
    const maxSales = Math.max(...analyticsData.salesData.map(item => item.sales));
    
    return (
      <div className="chart-container">
        <div className="chart-bars">
          {analyticsData.salesData.map((item, index) => (
            <div key={index} className="chart-bar-container">
              <div className="chart-bar-label">{item.month}</div>
              <div className="chart-bar">
                <div 
                  className="chart-bar-fill" 
                  style={{ height: `${(item.sales / maxSales) * 100}%` }}
                >
                  <span className="chart-bar-value">${item.sales.toLocaleString()}</span>
                </div>
              </div>
              <div className="chart-bar-orders">{item.orders} orders</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPieChart = () => {
    return (
      <div className="pie-chart-container">
        <div className="pie-chart">
          {analyticsData.categories.map((category, index) => {
            const rotation = analyticsData.categories
              .slice(0, index)
              .reduce((sum, cat) => sum + (cat.value * 3.6), 0);
            
            return (
              <div
                key={index}
                className="pie-segment"
                style={{
                  backgroundColor: category.color,
                  transform: `rotate(${rotation}deg)`,
                  clipPath: `inset(0 0 0 0 round 50%)`
                }}
              ></div>
            );
          })}
        </div>
        <div className="pie-legend">
          {analyticsData.categories.map((category, index) => (
            <div key={index} className="legend-item">
              <span 
                className="legend-color" 
                style={{ backgroundColor: category.color }}
              ></span>
              <span className="legend-label">{category.name}</span>
              <span className="legend-value">{category.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MetricCard = ({ title, value, change, icon, color }) => (
    <div className="metric-card">
      <div className="metric-icon" style={{ backgroundColor: color }}>
        <i className={icon}></i>
      </div>
      <div className="metric-content">
        <h3>${value.toLocaleString()}</h3>
        <p>{title}</p>
        <span className={`metric-change ${change >= 0 ? 'positive' : 'negative'}`}>
          <i className={`fas fa-arrow-${change >= 0 ? 'up' : 'down'}`}></i>
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  );

  return (
    <div className="analytics">
      <div className="analytics-header">
        <div className="header-left">
          <h1 className="page-title">Analytics Dashboard</h1>
          <div className="date-filter">
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="filter-select"
            >
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 3 Months</option>
              <option value="year">Last 12 Months</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary">
          <i className="fas fa-download"></i> Export Report
        </button>
      </div>

      <div className="metrics-grid">
        <MetricCard 
          title="Total Revenue" 
          value={analyticsData.overview.revenue} 
          change={percentageChange.revenue} 
          icon="fas fa-dollar-sign" 
          color="rgba(67, 97, 238, 0.1)" 
        />
        <MetricCard 
          title="Total Orders" 
          value={analyticsData.overview.orders} 
          change={percentageChange.orders} 
          icon="fas fa-shopping-cart" 
          color="rgba(76, 201, 240, 0.1)" 
        />
        <MetricCard 
          title="New Customers" 
          value={analyticsData.overview.customers} 
          change={percentageChange.customers} 
          icon="fas fa-users" 
          color="rgba(247, 37, 133, 0.1)" 
        />
        <MetricCard 
          title="Avg. Order Value" 
          value={analyticsData.overview.averageOrder} 
          change={percentageChange.averageOrder} 
          icon="fas fa-chart-line" 
          color="rgba(114, 9, 183, 0.1)" 
        />
      </div>

      <div className="analytics-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <i className="fas fa-chart-pie"></i> Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'sales' ? 'active' : ''}`}
          onClick={() => setActiveTab('sales')}
        >
          <i className="fas fa-chart-bar"></i> Sales
        </button>
        <button 
          className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          <i className="fas fa-box"></i> Products
        </button>
        <button 
          className={`tab-btn ${activeTab === 'customers' ? 'active' : ''}`}
          onClick={() => setActiveTab('customers')}
        >
          <i className="fas fa-users"></i> Customers
        </button>
      </div>

      <div className="analytics-content">
        {activeTab === 'overview' && (
          <div className="overview-grid">
            <div className="chart-card">
              <div className="card-header">
                <h3>Revenue Overview</h3>
                <span className="card-subtitle">Last 6 Months</span>
              </div>
              <div className="card-content">
                {renderSalesChart()}
              </div>
            </div>

            <div className="chart-card">
              <div className="card-header">
                <h3>Sales by Category</h3>
                <span className="card-subtitle">Percentage Distribution</span>
              </div>
              <div className="card-content">
                {renderPieChart()}
              </div>
            </div>

            <div className="chart-card">
              <div className="card-header">
                <h3>Top Performing Products</h3>
                <span className="card-subtitle">By Revenue</span>
              </div>
              <div className="card-content">
                <div className="products-list">
                  {analyticsData.topProducts.map((product, index) => (
                    <div key={index} className="product-item">
                      <div className="product-info">
                        <span className="product-rank">#{index + 1}</span>
                        <span className="product-name">{product.name}</span>
                      </div>
                      <div className="product-stats">
                        <span className="product-sales">${product.sales.toLocaleString()}</span>
                        <span className="product-units">{product.units} units</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="card-header">
                <h3>Performance Metrics</h3>
                <span className="card-subtitle">Key Indicators</span>
              </div>
              <div className="card-content">
                <div className="metrics-list">
                  <div className="metric-item">
                    <div className="metric-label">
                      <i className="fas fa-shopping-basket"></i>
                      <span>Conversion Rate</span>
                    </div>
                    <div className="metric-value">4.8%</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">
                      <i className="fas fa-undo"></i>
                      <span>Return Rate</span>
                    </div>
                    <div className="metric-value">2.3%</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">
                      <i className="fas fa-truck"></i>
                      <span>Delivery Time</span>
                    </div>
                    <div className="metric-value">2.1 days</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">
                      <i className="fas fa-star"></i>
                      <span>Customer Satisfaction</span>
                    </div>
                    <div className="metric-value">4.7/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sales' && (
          <div className="tab-content">
            <h3>Sales Analytics</h3>
            <p>Detailed sales reports and trends will be displayed here.</p>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="tab-content">
            <h3>Product Analytics</h3>
            <p>Product performance and inventory analytics will be displayed here.</p>
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="tab-content">
            <h3>Customer Analytics</h3>
            <p>Customer demographics and behavior analytics will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;