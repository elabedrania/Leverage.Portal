
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import PersonalData from './Components/PersonalData';
import CompanyData from './Components/CompanyData';
import Thanks from './Components/Thanks';
import Dashboard from './Components/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '/personalData',
      element : <PersonalData />
    },
    {
      path : '/companyData',
      element : <CompanyData /> 
    },
    {
      path : '/thanks',
      element : <Thanks />
    },
    {
      path : '/dashboard',
      element : <Dashboard />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
