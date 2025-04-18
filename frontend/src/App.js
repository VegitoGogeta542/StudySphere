import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import './Components/TitleHeader.css';
import ClassesPage from './WebPages/ClassesPage';
import { AddClassPage } from './WebPages/ClassesPage';
import SettingsPage from './WebPages/SettingsPage';
import Logo from './Assets/StudySphereLogo.png';
import Easy from './Assets/easy.png';
import Goal from './Assets/goal.png';
import Time from './Assets/time.png';
import 'hover.css/css/hover-min.css';
import LoginPage from './WebPages/LoginPage';
import { ViewClassesPage } from './WebPages/ClassesPage';


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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/classes/add" element={<AddClassPage />} />
        <Route path="/assignments" />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/classes/view" element={<ViewClassesPage />} />
        <Route path = "/settings/login" element = {<LoginPage />} />


      </Routes>
    </Router>
  );
}

export default App;