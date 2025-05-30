import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import User from './User';

export default function AllUser() {

    // state to hold all users
    const [allUsers, setAllUsers] = useState([]);

    const handleFetchUser = () => {

        //get token from local storage
        const token = localStorage.getItem('token');

        axios.request({
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `http://localhost:3000/api/users`
        }).then(response => {
            // set the response data to state
            setAllUsers(response.data);

            // log the response data to console
            console.log(response.data);
        });
    }

  return (
    <>
        <Button variant="primary" onClick={handleFetchUser}>Get All Users</Button>
        <div>
        <h2>All Users</h2>
        <p>This page will display a list of all users.</p>

        {/* display all users */}
        {allUsers.map(user => (
            <User 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email} 
             /> 
        ))} 

        </div>
    </>
  )
}
