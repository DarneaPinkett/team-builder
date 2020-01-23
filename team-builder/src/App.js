import React, {useState} from 'react';
import './App.css';
import Form from "../src/components/Form";
import Member from './components/Member';

function App() {

  const[member, setMember] = useState([]);

  const addNewMember = mem => {
    const newMember = {
      id: Date.now(),
      name: mem.name,
      email:mem.email,
      role:mem.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
     <h1 className="header">Build Your Team</h1>
     <div className="form">
       <Form addNewMember={addNewMember} />
       <Member member={member} />
       </div> 
    </div>
  );
}

export default App;
