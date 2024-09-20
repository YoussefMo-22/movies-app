import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import People from "./Pages/People";
import Tv from "./Pages/Tv";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';


function App() {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  function saveDataUser(){
    if(localStorage.getItem('Token_Value')!==null){
      let encodeToken = localStorage.getItem('Token_Value');
      let decodeToken = jwtDecode(encodeToken);
      setUserData(decodeToken);
    }else{
      setUserData(null);
    }
  }
  function logout(){
    localStorage.removeItem('Token_Value');
    setUserData(null);
    navigate("/login")
  }
  function ProtectedRoute(props){
    if(userData === null){
      return <Navigate to={"/login"} />
    }else{
      return props.children;
    }
  }
  useEffect(()=>{
    return(
      localStorage.removeItem('Token_Value')
    );
  },[])
  return (<>
    <Navbar userData={userData} logout={logout}/>
    <div className="container my-5">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="movies" element={<ProtectedRoute><Movies /></ProtectedRoute>}/>
        <Route path="people" element={<ProtectedRoute><People /></ProtectedRoute>}/>
        <Route path="tv" element={<ProtectedRoute><Tv /></ProtectedRoute>}/>
        <Route path="login" element={<Login saveDataUser={saveDataUser}/>}/>
        <Route path="register" element={<Register />}/>
        <Route path="*" element={<h1>404 - Not Found</h1>}/>
      </Routes>

    </div>
  </>
  );
}

export default App;
