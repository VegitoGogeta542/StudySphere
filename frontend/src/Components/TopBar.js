import './TopBar.css';
import '../assets/person.png'

export default function TopBar({ user, onLogout }) {
  return (
    <>
      <div className='topbar-hover-area'></div>
        <img src={user?.profilePicture || '../assets/person.png'} alt="Profile" className='profile-picture' />
      <div className='topbar'>
        {user
          ? `Welcome, ${user.name || user.email}`
          : 'Not logged in'}
      </div>
    </>
  );
}
