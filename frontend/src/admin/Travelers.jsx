import React from 'react';
import './AdminPage.css';
import AdminHeader from './Header';
import './Traveller.css'; // Assuming you have some CSS for styling

const Travelers = () => {
  return (
    <>
    <AdminHeader />
    <div className="admin-page">
      <h2>Registered Travelers</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Trips Booked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data */}
          <tr>
            <td>U001</td>
            <td>Alice Smith</td>
            <td>alice@example.com</td>
            <td>3</td>
            <td><button>View</button> <button>Ban</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Travelers;
