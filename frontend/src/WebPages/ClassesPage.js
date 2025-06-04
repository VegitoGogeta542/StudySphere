import React from 'react';
import './ClassesPage.css';
import MenuBar from '../Components/MenuBar';
import { Link } from 'react-router-dom';
import trainingIcon from '../Assets/training.png';
import { useState } from 'react';
function ClassesPage() {
  return (
    <>
      <MenuBar />
      <div className='headerClasses'>It's Time to Build Your Study Plan</div>
      <div className='icon_container_classespage'>
        <h1>Let's get Organized.</h1>
        <img src={trainingIcon} alt = ''className = 'training_icon' />
          <div className='buttons_container_classespage'><button className="draw-outline-btn">
            <Link to = "/classes/add" className='no-underline'>
              <span>Add Class</span>
              <span className="bottom-outline"></span>
            </Link>
            <span className="left-outline"></span>
          </button>
          <button className="draw-outline-btn larger_button">
            <Link to = "/classes/view" className='no-underline'>
              <span>View Classes</span>
              <span className="bottom-outline"></span>
            </Link>
            <span className="left-outline"></span>
          </button>
        </div>
        <h1 className='random_header_classespage'>It's time to stop procrastinating. Click either button to begin.</h1>
      </div>
    
      

    </>
  );
}

export default ClassesPage;

function AddClassPage() {
    const [addClass, setaddClass] = useState("");

    const changeaddClass = (event) => {
        setaddClass(event.target.value);
    };

    const saveClass = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('http://127.0.0.1:5000/add_class', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ classname: addClass }),
    });

    const data = await response.json(); // This can fail if response body is empty

    if (response.ok) {
      alert(data.message || "Class added successfully!");
    } else {
      console.error("Backend Error:", data); // Log for debug
      alert(`Error: ${data.error || "Something went wrong."}`);
    }
    if (data.msg === "Token has expired") {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
}
  } catch (error) {
    console.error("Fetch Error:", error);
    alert(`Network or JSON error: ${error.message || "Unknown error"}`);
  }
};

  
  return (
    <>
      <h1 className='header1'>Add a class</h1>
      <p className='header1'>Enter the name of the class below</p>
      <input 
      type="text" 
      className="class-name" 
      placeholder="Class name"
      value={addClass}
      onChange={changeaddClass}
       />
      <button className="add-class-button" onClick={saveClass}>Add</button>


    </>
  );
}
export { AddClassPage };


