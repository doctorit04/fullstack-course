import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function AllUser() {

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
            console.log(response.data);
        });

    }

  return (
    <>
        <Button variant="primary" onClick={handleFetchUser}>Get All Users</Button>
        <div>
        <h2>All Users</h2>
        <p>This page will display a list of all users.</p>
        {/* You can add user components here or fetch and display users from an API */}
        </div>
    </>
  )
}
