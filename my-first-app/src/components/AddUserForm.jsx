import React, {useState} from 'react'
import validateConfirmPassword from '../utility/ValidateConfirmPassword';
import validatePassword from '../utility/ValidatePassword';
import validateEmail from '../utility/ValidateEmail';


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
            confirmPassword: confirmPassword
        };

    console.log('User Data to be sent:', userData);

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
