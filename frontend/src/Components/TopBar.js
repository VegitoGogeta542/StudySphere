import './TopBar.css';
import { useEffect, useState } from 'react';

export default function TopBar({ onLogout }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    setUserName(storedName || "Guest");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    onLogout();
  }

  return (
    <>
      <div className='topbar-hover-area'></div>
      <div className='topbar'>
        Welcome, {userName}!
        {userName !== "Guest" && (
          <button className='logout-button' onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}
