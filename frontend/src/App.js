import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import TopBar from './Components/TopBar'; // ✅ Correct import
import './Components/TitleHeader.css';
import ClassesPage from './WebPages/ClassesPage';
import { AddClassPage } from './WebPages/ClassesPage';
import SignUpPage from './WebPages/SignUpPage';
import Logo from './Assets/StudySphereLogo.png';
import Easy from './Assets/easy.png';
import Goal from './Assets/goal.png';
import Time from './Assets/time.png';
import 'hover.css/css/hover-min.css';
import SettingsPage from './WebPages/SettingsPage';
import LoginPage from './WebPages/LoginPage';
import { ViewClassesPage } from './WebPages/ClassesPage';
import {jwtDecode} from 'jwt-decode';



// ✅ Move HomeLayout INSIDE App so it can access user
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded.sub);
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  const logout = () => {
     localStorage.removeItem("token"); // clear token
     setUser(null);                    // clear user
     window.location.href = "/settings/login"; // redirect
    };  

  function HomeLayout() {
    return (
      <div className="container">
        <MenuBar />
        <div className="content">
          <h1 className="header">Welcome to StudySphere</h1>
          <h2 className="header2">StudySphere is your ultimate platform to organize and manage your studying and class schedules. Dive into a seamless scheduling experience tailored just for students.</h2>
          <img src={Logo} alt="Logo" className="top-right" />
          <Link className='no-underline' to="/settings">
            <button className="sign-up">Sign up now</button>
          </Link>

          <div className='icon-container'>
            <div className='icon-wrapper'>
              <img src={Easy} width={100} height={100} alt="Easy" className='easy_icon' />
              <div className='text1'>Flawlessly plan your assignments and study sessions for every class using StudySphere's classes.</div>
            </div>
            <div className='icon-wrapper'>
              <img src={Goal} width={100} height={100} alt="Goal" className='goal_icon' />
              <div className='text2'>Keep track and follow your learning goals consistently and effectively.</div>
            </div>
            <div className='icon-wrapper'>
              <img src={Time} width={100} height={100} alt="Time" className='time_icon' />
              <div className='text3'>Save time and effort by organizing your study schedules and assignments in one place.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <TopBar user={user} onLogout={logout} /> {/* 👈 pass user + logout */}
      <Routes>
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/add" element={<AddClassPage />} />
        <Route path="/assignments" />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/signup" element={<SignUpPage />} />
        <Route path="/classes/view" element={<ViewClassesPage />} />
        <Route path="/settings/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
