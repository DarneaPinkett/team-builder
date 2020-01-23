import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({
        id: Date.now(),
        name:"",
        email:"",
        role:"",
    });

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.valur});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name:"", email:"", role:""});
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Members Name</label>
                <input type="text" id="name" placeholder="First and Last Name" name="name" value={member.name} onChange={handleChanges} />
                <br/>
                <label htmlFor="email">Members Email</label>
                <input type="email" id="email" placeholder="Email Address" name="name" value={member.email} onChange={handleChanges} />
                <br />
                <label htmlFor="role">Members Role</label>
                <select id="role" name="role" value={member.role} onChange={handleChanges}>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="UX Desginer">UX Desginer</option>
                    <option value="Fullstack Engineer">Fullstack Engineer</option>
                </select>
                <br />
                <label htmlFor="addMember">Add Member</label>
                <button type="submit" id="addMember">Submit</button>
            </form>
        </div>
    )
}

export  default Form;