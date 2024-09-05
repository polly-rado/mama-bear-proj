import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import NavBar  from './components/NavBar';
import { api } from './utilities'; 

function App() {
  const [user, setUser] = useState(useLoaderData());
  const navigate = useNavigate();
  const location = useLocation();

  const testConnection = async () => {
    let response = await api.get("test/");
    console.log(response.data)
  };
  
  useEffect(() => {
    testConnection();
  }, []);

  useEffect(()=>{
    console.log(location.pathname, user)
    const nullUserUrls = ['/login/', '/signup/'];
    const isNullAllowed = nullUserUrls.includes(location.pathname);

    if (!user && !isNullAllowed){
      navigate('/login/');
    }

  }, [location.pathname, user])

  return (
    <div style={{ backgroundColor: '#F5EFE7', minHeight: '100vh' }}>
      <NavBar user = {user} setUser={setUser}/>
      <Outlet context={{user, setUser}}/>
    </div>
  );
}

export default App;
