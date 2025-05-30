import React from 'react'

export default function AddUserForm() {
  return (
    <div className='container mt-5'>
        <form>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
             <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" placeholder="Enter Password" />
            </div>
             <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    </div>
  )
}
