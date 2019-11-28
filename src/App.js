import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
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
