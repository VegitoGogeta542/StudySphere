import React, { useState } from 'react';
import './SignUpPage.css';
import MenuBar from '../Components/MenuBar';
import passwordIcon from '../Assets/password.png';
import mailIcon from '../Assets/mail.png';
import personIcon from '../Assets/person.png';
import { Link } from 'react-router-dom';




function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const saveUserDetails = async () => {
    const payload = { name, email, password};

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Success message from the backend
      } else {
        alert(`Error: ${data.error}`); // Error message from the backend
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };



  return (
    <>
    <div className='split-screen-container'>
  <div className='signup-side'>
    <MenuBar />
    

    <Link to='/settings/login'>
    <button className='save-button'>Already have an account? Login Here!</button>
    </Link>
    
    <div className='sign-up-screen'>
      <div className='header-container'>
        <h1 className='header1'>Sign up</h1>
        <hr className='line' />
      </div>
    
      <div className='input-group'>
        <input
          className='input_box'
          value={name}
          onChange={changeName}
          placeholder=" "  // Placeholder text (doesn’t show when the input has content)
        />
        {/* Conditionally render the label */}
        {name.trim() === "" && <div className='inside-box'>Name</div>}
        <img src={personIcon} width={25} height={25} alt="Name" className='icon1' />
      </div>
      
      <div className='input-group'>
        <input
          className='input_box'
          value={email}
          onChange={changeEmail}
          placeholder=" "  // Placeholder text (doesn't show when the input has content)
        />
        {/* Conditionally render the label for Email */}
        {email.trim() === "" && <div className='inside-box'>Email</div>}
        <img src={mailIcon} width={25} height={25} alt="Email" className='icon1' />
      </div>
      <div className='input-group'>
        <input
          className='input_box'
          type='password'
          value={password}
          onChange={changePassword}
          placeholder=" "  // Placeholder text (doesn’t show when the input has content)
        />
        {/* Conditionally render the label for Password */}
        {password.trim() === "" && <div className='inside-box'>Password</div>}
        <img src={passwordIcon} width={25} height={25} alt="Password" className='icon1' />
</div>   
      <button className='save-button' onClick={saveUserDetails}>Save</button>
    </div>
  </div>
  
  <div className='image-side'>
      <p className='typing-text'>Welcome to StudySphere!</p> 
    
    
  </div>
</div>

      
        

      
    </>
  );
}

export default SignUpPage;