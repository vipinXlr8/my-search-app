
import './App.css';
import { Users } from "./users";
import { useState } from "react"; 
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter(
      (item) => item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query)); 
  };
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search"
      onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
