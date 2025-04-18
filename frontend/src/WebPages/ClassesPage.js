import React from 'react';
import './ClassesPage.css';
import Cards from "../Components/Cards";
import { Link } from 'react-router-dom';
import trainingIcon from '../Assets/training.png';
import { useState } from 'react';
function ClassesPage() {
  return (
    <>
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
            <Link to = "/classes/add" className='no-underline'>
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
    const [AddClass, setAddClass] = useState("");

    const changeAddClass = (event) => {
        setAddClass(event.target.value);
    };

    const saveClass = async () => {
        const payload = {AddClass};
    
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
      <h1 className='header1'>Add a class</h1>
      <p className='header1'>Enter the name of the class below</p>
      <input 
      type="text" 
      className="class-name" 
      placeholder="Class name"
      value={AddClass}
      onChange={changeAddClass}
       />
      <button className="add-class-button" onClick={saveClass}>Add</button>


    </>
  );
}
export { AddClassPage };

function ViewClassesPage() {
  return (
    <>
      <h1 className='header1'>View Classes</h1>
      <p className='header1'>Here are your classes</p>
      <div className='App'><Cards /></div>
    </>
  );
}

export { ViewClassesPage };
