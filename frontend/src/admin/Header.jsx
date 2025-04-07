import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="admin-title">Manage AURA</div>

      <div className="admin-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search Admin Panel..."
          className="search-input"
        />
      </div>

      <nav className="admin-nav">
        <Link to="/admin/" className="nav-link">Dashboard</Link>
        <Link to="/admin/products" className="nav-link">Manage Products</Link>
        <Link to="/admin/orders" className="nav-link">Orders</Link>
        <Link to="/admin/users" className="nav-link">Users</Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
