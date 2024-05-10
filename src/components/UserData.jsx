import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserData = ({ users }) => {
  const [expandedUserId, setExpandedUserId] = useState(null);

  const toggleDetails = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  return (
    <div className="user-cards">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-avatar" />
          <div className="user-details">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            <button className="view-details-btn" onClick={() => toggleDetails(user.id)}>
              {expandedUserId === user.id ? "Hide Details" : "View Details"}
            </button>

            {expandedUserId === user.id && (
              <div className="user-details-expanded">
                {/* --- Personal Information --- */}
                <h2>Personal Information</h2>
                <table>
                  <tbody>
                    <tr><th>First Name:</th><td>{user.firstName}</td></tr>
                    <tr><th>Last Name:</th><td>{user.lastName}</td></tr>
                    <tr><th>Age:</th><td>{user.age}</td></tr>
                    <tr><th>Gender:</th><td>{user.gender}</td></tr>
                    <tr><th>Email:</th><td>{user.email}</td></tr>
                    <tr><th>Phone:</th><td>{user.phone}</td></tr>
                  </tbody>
                </table>

                {/* --- Address --- */}
                <h2>Address</h2>
                <table>
                  <tbody>
                    <tr><th>Street:</th><td>{user.address.address}</td></tr>
                    <tr><th>City:</th><td>{user.address.city}</td></tr>
                    <tr><th>State:</th><td>{user.address.state}</td></tr>
                    <tr><th>Postal Code:</th><td>{user.address.postalCode}</td></tr>
                  </tbody>
                </table>

                {/* --- Bank Information --- */}
                <h2>Bank Information</h2>
                <table>
                  <tbody>
                    <tr><th>Card Number:</th><td>{user.bank.cardNumber}</td></tr>
                    <tr><th>Card Type:</th><td>{user.bank.cardType}</td></tr>
                    <tr><th>Card Expiry:</th><td>{user.bank.cardExpire}</td></tr>
                    <tr><th>IBAN:</th><td>{user.bank.iban}</td></tr>
                  </tbody>
                </table>

                {/* --- Company Information --- */}
                <h2>Company Information</h2>
                <table>
                  <tbody>
                    <tr><th>Company Name:</th><td>{user.company.name}</td></tr>
                    <tr><th>Title:</th><td>{user.company.title}</td></tr>
                    <tr><th>Department:</th><td>{user.company.department}</td></tr>
                  </tbody>
                </table>

                {/* --- Crypto Information --- */}
                <h2>Crypto Information</h2>
                <table>
                  <tbody>
                    <tr><th>Coin:</th><td>{user.crypto.coin}</td></tr>
                    <tr><th>Wallet:</th><td>{user.crypto.wallet}</td></tr>
                    <tr><th>Network:</th><td>{user.crypto.network}</td></tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


export default UserData;
