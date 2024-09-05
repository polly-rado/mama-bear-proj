import React, { useState } from 'react';
import '../styles/LogBox.css';  // Import the CSS file

function SleepLog({ logs, setLogs }) {
  const [newLog, setNewLog] = useState({
    startTime: '',
    endTime: '',
    notes: ''
  });

  const handleAddLog = () => {
    setLogs([...logs, newLog]);
    setNewLog({ startTime: '', endTime: '', notes: '' }); // Clear input fields
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
      <h2>Sleep Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <p>Start Time: {log.startTime}</p>
            <p>End Time: {log.endTime}</p>
            <p>Notes: {log.notes || 'None'}</p>
            <button onClick={() => handleDeleteLog(index)}>Delete</button>
            <button onClick={() => handleUpdateLog(index, { ...log, notes: prompt("Update Notes:", log.notes) })}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="datetime-local"
          value={newLog.startTime}
          onChange={(e) => setNewLog({ ...newLog, startTime: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          value={newLog.endTime}
          onChange={(e) => setNewLog({ ...newLog, endTime: e.target.value })}
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

export default SleepLog;
