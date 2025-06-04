import { useEffect, useState } from 'react';
import MenuBar from '../Components/MenuBar';


function ViewClassesPage() {
    const [classes, setClasses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:5000/get_classes", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setClasses(data);
      })
      .catch(err => {
        console.error("Error fetching classes:", err);
      });
  }, []);
  return (
    <>
    <MenuBar />
  <div>
    <h2>Your Classes</h2>
    {Array.isArray(classes) ? (
      classes.map(c => (
        <div key={c.id}>
          <p>{c.classname}</p>
        </div>
      ))
    ) : (
      <p>Loading or no classes found.</p>
    )}
  </div>
</>
);
}


export default ViewClassesPage