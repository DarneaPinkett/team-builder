import React, {useState} from 'react';
import './App.css';
import MemberList from "../src/components/MemberList"
import Member from './components/Member';

function App() {

  const[members, setMembers] = useState([]);

  const[member, setMember] = useState({name: "", email: "", role:""});

  const handleChange = event =>{
    setMember({ ...member,[event.target.name]:event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    members.push(member)
    setMember({name: "", email: "",role: ""});
  };
  return (
    <div className="App">
      <h1>Member Form</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label> Name:
          <input type="text" name="name" value={member.name} onChange={event => handleChange(event)} />
        </label>
        <label> Email:
          <input type="text" name="email" value={member.email} onChange={event=> handleChange(event)} />
        </label>
        <label> Role:
          <input type="text" name="role" value={member.role} onChange={event => handleChange(event)} />
        </label>
        <button>Submit</button>

      </form>
      <MemberList members={members} />
    </div>
  );
}

export default App;
