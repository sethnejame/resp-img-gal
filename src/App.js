import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
      await fetch("https://reqres.in/api/users?page=1")
          .then(res => res.json())
          .then(res => res.data)
      );
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>Responsive Image Gallery</h3>
      <ul>
      {users.map((item, index) => {
        return <li key={index}>{item.email}</li>
      })}
      </ul>
    </div>
  );
}

export default App;
