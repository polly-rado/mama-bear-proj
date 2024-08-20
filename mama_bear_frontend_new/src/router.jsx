import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import GeminiPage from './pages/GeminiPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
// import { confirmUser } from './utilities'
import ChildProfilePage from './pages/ChildProfilePage'
import AddChildProfilePage from './pages/AddChildProfilePage' 

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        // loader: confirmUser,
        children: [
            {
                index:true, 
                element:<HomePage/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/login",
                element:<LogIn/>
            },
            {
                path:"/dashboard",
                element:<DashboardPage/>
            },
            {
                path:"/gemini",
                element:<GeminiPage/>
            },
            {
                path:"/child-profile",
                element:<ChildProfilePage/>
            },
            {
                path:"/add-child-profile",
                element:<AddChildProfilePage/>
            },

        ],
    },
]);

export default router; 

