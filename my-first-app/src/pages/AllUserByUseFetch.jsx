import React from 'react'
import useFetch from '../hooks/useFetch';
import UserTable from '../components/UserTable';


export default function AllUserByUseFetch() {

  const url = 'http://localhost:3000/api/users';
  const { data: allUsers} = useFetch(url);


  return (
     <div>
        <h2>All Users By useFetch custom Hooks</h2>
        <UserTable users={allUsers} />
      </div>
  )
}
