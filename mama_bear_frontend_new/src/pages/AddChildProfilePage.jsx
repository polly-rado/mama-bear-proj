import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LogBox.css'; 

function AddChildProfilePage() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [allergies, setAllergies] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProfiles = JSON.parse(localStorage.getItem('childProfiles')) || [];
    const newProfile = { name, birthday, bloodType, allergies };
    const updatedProfiles = [...existingProfiles, newProfile];
    localStorage.setItem('childProfiles', JSON.stringify(updatedProfiles));

    setName('');
    setBirthday('');
    setBloodType('');
    setAllergies('');

    navigate('/child-profile');
  };

  return (
    <div className="log-box"> 
      <h1>Create Child Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Birthday:</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Blood Type:</label>
          <input
            type="text"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Allergies (if any):</label>
          <input
            type="text"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="Enter allergies, if any"
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default AddChildProfilePage; 
