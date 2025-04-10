import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header" style={{position: "fixed",width:"100%", top: 0, zIndex: 1000}}>
      <div className="admin-title">Buddy's Traveller</div>

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
        <Link to="/admin/booking" className="nav-link">Manage Booking</Link>
        <Link to="/admin/destination" className="nav-link">Destinations</Link>
        <Link to="/admin/travellers" className="nav-link">Travelers</Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
