import React, {useState, useEffect} from 'react'
import axios from 'axios';

import User from '../components/User';
import UserTable from '../components/UserTable';


export default function AllUser() {

// state to hold all users
const [allUsers, setAllUsers] = useState([]);

// Function to fetch all users
useEffect(() => { 

  console.log("Fetching all users...");

  //get token from local storage
  const token = localStorage.getItem('token');
  axios.request({
        headers: {
            Authorization: 'Bearer '+token
        },
        method: "GET",
        url: 'http://localhost:3000/api/users'
        }).then(response => {
            // set the response data to state
            setAllUsers(response.data);

            // log the response data to console
            console.log(response.data);
      });

}, []);


  return (
    <div>
    <h2>All Users</h2>
    <UserTable users={allUsers} />
    </div>
  )
}
