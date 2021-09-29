import React, { useState, useEffect } from 'react'
import  axios from "axios";
function UserList() {

const [user, setUser ] = useState([]) 
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
        console.log(res)
       setUser(res.data)
    }
    )
    .catch(err  => {
        console.log(err)
    }
        )
},[]
)
    return (
        <div>
           <ul>
            {user.map( user => (
                <li key={user.id}> {user.title} </li>

            )

            ) }            
           </ul> 
        </div>
    )
}

export default UserList
