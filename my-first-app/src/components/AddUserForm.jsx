import React, {useState} from 'react'
import validateConfirmPassword from '../utility/ValidateConfirmPassword';
import validatePassword from '../utility/ValidatePassword';
import validateEmail from '../utility/ValidateEmail';

import axios from 'axios';

export default function AddUserForm() {


    // State variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //detect changes in the name input field
    const handleNameChange = (event) => { 
        const { value } = event.target;
        setName(value);
    }

    //detect changes in the email input field
    const handleEmailChange = (event) => { 
        const { value } = event.target;
        setEmail(value);
    }

    //detect changes in the password input field
    const handlePasswordChange = (event) => { 
        const { value } = event.target;
        setPassword(value);
    }

    //detect changes in the confirm password input field
    const handleConfirmPasswordChange = (event) => { 
        const { value } = event.target;
        setConfirmPassword(value);
    }
    

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Here you would typically send the data to your server
        const userData = {
            name: name,
            email: email,
            password: password,
        };

        //get token from local storage
        const token = localStorage.getItem('token');
        axios.request({
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: userData, // data to be sent to the server
        method: "POST",
        url: 'http://localhost:3000/api/users'
        }).then(response => {

            alert("User added successfully");

            setTimeout(() => {
                //delay 1 second then redirect to all users page
                window.location.href = '/alluser';
            }, 1000);

            // log the response data to console
            console.log(response.data);
        });
    }
    
  return (
    <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" 
            id="name" placeholder="Enter name"
            onChange={handleNameChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" 
            id="email" placeholder="Enter email"
            onChange={handleEmailChange}
            />
            </div>
             <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" 
            id="Password" placeholder="Enter Password"
            onChange={handlePasswordChange}
            />
            </div>
             <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" 
            id="confirm_password" placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    </div>
  )
}
