import React, { useState, useEffect } from 'react';
import { api } from '../apis/axios';
import { useParams } from 'react-router-dom';

function ChildProfilePage() {
    const { id } = useParams();  
    const [child, setChild] = useState(null);
    const [logs, setLogs] = useState({ feed: [], sleep: [], activity: [] });

    useEffect(() => {
        const fetchChildData = async () => {
            try {
                const response = await api.get(`/children/${id}/`);
                setChild(response.data);
                setLogs({
                    feed: response.data.feed_logs,
                    sleep: response.data.sleep_logs,
                    activity: response.data.activity_logs,
                });
            } catch (error) {
                console.error('Error fetching child data:', error);
            }
        };

        fetchChildData();
    }, [id]);


const handleAddLog = async (type, logData) => {
  try {
      const response = await api.post(`/children/${id}/${type}-logs/`, logData);
      setLogs(prevLogs => ({
          ...prevLogs,
          [type]: [...prevLogs[type], response.data],
      }));
  } catch (error) {
      console.error(`Error adding ${type} log:`, error);
  }
};

<form onSubmit={(e) => {
  e.preventDefault();
  handleAddLog('feed', {
      type: 'Milk',
      amount: '200ml',
      date_and_time: new Date(),
      notes: 'Fed well',
  });
}}>
  <input type="text" placeholder="Log type" required />
  <input type="text" placeholder="Amount" required />
  <input type="datetime-local" />
  <textarea placeholder="Notes"></textarea>
  <button type="submit">Add Log</button>
</form>


    return (
        <div>
            {child && (
                <>
                    <h1>{child.name}'s Profile</h1>
                    <p>Birthday: {child.birthday}</p>
                    <p>Blood Type: {child.blood_type}</p>
                    <p>Allergies: {child.allergies}</p>

                    <h2>Feed Logs</h2>
                    <ul>
                        {logs.feed.map(log => (
                            <li key={log.feed_log_id}>{log.type} - {log.amount} on {log.date_and_time}</li>
                        ))}
                    </ul>

                    <h2>Sleep Logs</h2>
                    <ul>
                        {logs.sleep.map(log => (
                            <li key={log.sleep_log_id}>From {log.start_time} to {log.end_time}</li>
                        ))}
                    </ul>

                    <h2>Activity Logs</h2>
                    <ul>
                        {logs.activity.map(log => (
                            <li key={log.activity_log_id}>{log.activity} on {log.date}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default ChildProfilePage;
