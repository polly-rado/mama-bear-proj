import React from 'react';
import '../styles/ChildProfilePage.css';

function ChildProfilePage() {
  return (
    <div className="child-profile-page">
      <h1>Child Profile</h1>
      <p>Name: [Child's Name]</p>
      <p>Age: [Child's Age]</p>
      <button>Update Profile</button>
    </div>
  );
}

export default ChildProfilePage;

