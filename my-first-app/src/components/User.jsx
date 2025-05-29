import React from 'react'

export default function User({id, name, email}) {

    const boxStyle = { 
        with: '300px',
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    }

  return (
    <>
        <div style={boxStyle}>
            <h2>ID:{id}</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email} </p>
        </div>
    </>
  )
}
