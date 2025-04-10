import React from 'react';
import './Destination.css';
import AdminHeader from './Header';
const Destinations = () => {
  return (
    <>
    <AdminHeader/>
    <div className="admin-page">
      <h2>Manage Destinations</h2>
      <div className="destination-list">
        <div className="destination-card">
          <h4>Paris</h4>
          <p>City of Light, Eiffel Tower, Art & Romance</p>
          <button>Edit</button>
          <button>Remove</button>
        </div>
        <div className="destination-card">
          <h4>Tokyo</h4>
          <p>Tech meets tradition. Sushi, Sakura, Shibuya.</p>
          <button>Edit</button>
          <button>Remove</button>
        </div>
        {/* Repeat or map more */}
      </div>
    </div>
    </>
  );
};

export default Destinations;
