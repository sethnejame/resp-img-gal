import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=1")
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log(err, "Fetch error!"))
      );
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>Responsive Image Gallery</h3>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map((item, index) => {
          return <li key={index}>{item.first_name}</li>;
        })}
      </Grid>
    </div>
  );
}

export default App;
