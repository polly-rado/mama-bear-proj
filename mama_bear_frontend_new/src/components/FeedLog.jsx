import React, { useState } from 'react';
import '../styles/LogBox.css';  // Import the CSS file

function FeedLog({ logs, setLogs }) {
  const [newLog, setNewLog] = useState({
    type: '',
    amount: '',
    dateTime: '',
    notes: ''
  });

  const handleAddLog = () => {
    setLogs([...logs, newLog]);
    setNewLog({ type: '', amount: '', dateTime: '', notes: '' }); // Clear input fields
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
      <h2>Feed Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <p>Type: {log.type}</p>
            <p>Amount: {log.amount}</p>
            <p>Date & Time: {log.dateTime}</p>
            <p>Notes: {log.notes || 'None'}</p>
            <button onClick={() => handleDeleteLog(index)}>Delete</button>
            <button onClick={() => handleUpdateLog(index, { ...log, notes: prompt("Update Notes:", log.notes) })}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Type"
          value={newLog.type}
          onChange={(e) => setNewLog({ ...newLog, type: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Amount"
          value={newLog.amount}
          onChange={(e) => setNewLog({ ...newLog, amount: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          value={newLog.dateTime}
          onChange={(e) => setNewLog({ ...newLog, dateTime: e.target.value })}
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

export default FeedLog;
