import React, { useState } from 'react';
import '../styles/LogBox.css';  // Import the CSS file

function ActivityLog({ logs, setLogs }) {
  const [newLog, setNewLog] = useState({
    activity: '',
    date: '',
    notes: ''
  });

  const handleAddLog = () => {
    setLogs([...logs, newLog]);
    setNewLog({ activity: '', date: '', notes: '' }); // Clear input fields
  };
  const handleDeleteLog = (index) => {
    setLogs(logs.filter((_, i) => i !== index));
  };
  const handleUpdateLog = (index, updatedLog) => {
    const updatedLogs = logs.map((log, i) => (i === index ? updatedLog : log));
    setLogs(updatedLogs);
  };
  return (
    <div className="log-box">
      <h2>Activity Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <p>Activity: {log.activity}</p>
            <p>Date: {log.date}</p>
            <p>Notes: {log.notes || 'None'}</p>
            <button onClick={() => handleDeleteLog(index)}>Delete</button>
            <button onClick={() => handleUpdateLog(index, { ...log, notes: prompt("Update Notes:", log.notes) })}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Activity"
          value={newLog.activity}
          onChange={(e) => setNewLog({ ...newLog, activity: e.target.value })}
          required
        />
        <input
          type="date"
          value={newLog.date}
          onChange={(e) => setNewLog({ ...newLog, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Notes"
          value={newLog.notes}
          onChange={(e) => setNewLog({ ...newLog, notes: e.target.value })}
        />
        <button onClick={handleAddLog}>Add Log</button>
      </div>
    </div>
  );
}

export default ActivityLog;
