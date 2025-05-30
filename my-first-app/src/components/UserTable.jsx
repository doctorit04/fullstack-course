import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function UserTable({users}) {

console.log("Rendering UserTable with users:", users);

  return (
    <div>
        <p>This component will display a table of users.</p>
        {/* Placeholder for user table */}
         <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {/* Rows will be populated here */}
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Button variant="warning" className='mx-2'>Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </td>
                </tr>
            ))} 

            </tbody>
        </Table>
    </div>
  )
}
