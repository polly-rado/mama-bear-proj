import React, { useState, useEffect } from 'react';
import FeedLog from '../components/FeedLog';
import SleepLog from '../components/SleepLog';
import ActivityLog from '../components/ActivityLog';
import '../styles/LogBox.css'; 

function ChildProfilePage() {
  const [childProfiles, setChildProfiles] = useState([]);

  
  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem('childProfiles')) || [];
    setChildProfiles(savedProfiles);
  }, []);

  
  const handleDeleteProfile = (index) => {
    const updatedProfiles = childProfiles.filter((_, i) => i !== index);
    setChildProfiles(updatedProfiles);
    localStorage.setItem('childProfiles', JSON.stringify(updatedProfiles));
  };

  return (
    <div id="HomePage">
      <h1>Child Profiles</h1>
      <ul>
        {childProfiles.map((profile, index) => (
          <li key={index} className="log-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>{profile.name}</h2>
              <button className="custom-button" onClick={() => handleDeleteProfile(index)} style={{ backgroundColor: '', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
            <p>Birthday: {profile.birthday}</p>
            <p>Blood Type: {profile.bloodType}</p>
            <p>Allergies: {profile.allergies || 'None'}</p>

            <FeedLog
              logs={profile.feedLogs || []}
              setLogs={(newLogs) => {
                const updatedProfiles = [...childProfiles];
                updatedProfiles[index].feedLogs = newLogs;
                setChildProfiles(updatedProfiles);
                localStorage.setItem('childProfiles', JSON.stringify(updatedProfiles));
              }}
            />

            <SleepLog
              logs={profile.sleepLogs || []}
              setLogs={(newLogs) => {
                const updatedProfiles = [...childProfiles];
                updatedProfiles[index].sleepLogs = newLogs;
                setChildProfiles(updatedProfiles);
                localStorage.setItem('childProfiles', JSON.stringify(updatedProfiles));
              }}
            />

            <ActivityLog
              logs={profile.activityLogs || []}
              setLogs={(newLogs) => {
                const updatedProfiles = [...childProfiles];
                updatedProfiles[index].activityLogs = newLogs;
                setChildProfiles(updatedProfiles);
                localStorage.setItem('childProfiles', JSON.stringify(updatedProfiles));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildProfilePage;
