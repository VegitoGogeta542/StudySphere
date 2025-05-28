import './TopBar.css';


export default function TopBar({ user, onLogout }) {
  return (
    <>
      <div className='topbar-hover-area'></div>
      <div className='topbar'>
        {user
          ? `Welcome, ${user.name || user.email}`
          : 'Not logged in'}
      </div>
    </>
  );
}
