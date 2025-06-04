import './SettingsPage.css'
import { Link } from "react-router-dom";

function SettingsPage() {

  return (
    <>
    <div className='allbuttons-container-settingspage'>
    <Link to='/settings/signup'>
         <button className='settings-button-redirect'>Sign up here!</button>
    </Link>
      <h1>Settings</h1>
      <p>This is the settings page.</p>
    </div>
    </>
  );
}

export default SettingsPage;