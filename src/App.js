import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //API call
    async function fetchData() {
      fetch("https://reqres.in//api/users")
        .then(res => JSON.stringify(res))
        .then(data => console.log(data));
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>Responsive Image Gallery</h3>
    </div>
  );
}

export default App;
