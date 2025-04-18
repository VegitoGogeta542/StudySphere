import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../Assets/home.png';
import classesIcon from '../Assets/classes.png';
import studyIcon from '../Assets/studying.png';
import settingsIcon from '../Assets/settings.png';
import './MenuBar.css';

const MenuBar = () => {
    return (
      <>
        <div className="hover-area"></div>
        <div className="menubar">
          <div className="box">
            <Link to="/home">
              <img src={homeIcon} width={100} height={100} alt="Home" className="icon" />
              Home 
            </Link>
          </div>
          <div className="box">
            <Link to="/classes">
              <img src={classesIcon} width={100} height={100} alt="Classes" className="icon" />
              Classes
            </Link>
          </div>
          <div className="box">
            <Link to="/assignments">
              <img src={studyIcon} width={100} height={100} alt="Assignments" className="icon" />
              Assignments
            </Link>
          </div>
          <div className="box">
            <Link to="/settings">
              <img src={settingsIcon} width={100} height={100} alt="Settings" className="icon" />
              Settings
            </Link>
          </div>
        </div>
      </>
    );
};

export default MenuBar;