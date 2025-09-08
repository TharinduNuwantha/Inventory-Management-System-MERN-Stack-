import React from 'react'

export const Header = () => {
  return (
    <div className="header">
      <h1 className="page-title">Dashboard Overview</h1>
      <div className="user-profile">
        <div className="notification-bell">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className="user-info">
          <span className="user-name">John Smith</span>
          <span className="user-role">Administrator</span>
        </div>
        <div className="user-avatar">JS</div>
      </div>
    </div>
  )
}
