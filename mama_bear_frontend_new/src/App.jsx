import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar}  from './components/NavBar';
import { api } from './utilities'; 

function App() {
  const [user, setUser] = useState(null);

  const testConnection = async () => {
    let response = await api.get("test/");
    console.log(response.data)
  };
  
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <>
      <NavBar/>
     
      <Outlet context={{user, setUser}}/>
  
    </>
  );
}

export default App;

