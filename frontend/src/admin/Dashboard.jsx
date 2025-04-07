import React, { useEffect, useState } from "react";
import "./AdminDashboard.css"; // Import CSS
import Header from "./Header";

const AdminDashboard = () => {
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalBookings: 0,
    totalRevenue: 0,
    totalDestinations: 0,
  });

  return (
    <>
    <Header />
    <div className="dashboard-container">
      <h1 className="dashboard-title">Travel Admin Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Travelers</h3>
          <p className="dashboard-number">{summary.totalUsers}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Bookings</h3>
          <p className="dashboard-number">{summary.totalBookings}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <p className="dashboard-number">${summary.totalRevenue}</p>
        </div>
        <div className="dashboard-card">
          <h3>Destinations Listed</h3>
          <p className="dashboard-number">{summary.totalDestinations}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
