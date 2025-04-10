import React from 'react';
import './ManageBooking.css';
import AdminHeader from './Header';

const ManageBooking = () => {
  return (
    <>
    <AdminHeader />
    <div className="admin-page" style={{marginTop: "60px"}}>
      <h2>Manage Bookings</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Traveller Name</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data */}
          <tr>
            <td>#001</td>
            <td>John Doe</td>
            <td>Paris</td>
            <td>2025-05-10</td>
            <td>Confirmed</td>
            <td><button>Edit</button> <button>Cancel</button></td>
          </tr>
          {/* More rows dynamically here */}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ManageBooking;
