import axios from 'axios'
import React,{useEffect,useState} from 'react'


const UserList = () => {
 const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data))
        
    }, [])

    return (
        <div style={{textAlign:'center',backgroundImage:'url(https://lh3.googleusercontent.com/proxy/vhrrNmreKYMDUJ7SjhvCbW3b_cJ-feTHtNqJ85Xw5ldAxdGGzVIV4VOlsPQoYlsrvghOq02ojhkDCvzk91dy3FQOtHk0iE6pgYv0yDX9ywOUG1L8GAQ)',backgroundRepeat:'no-repeat',backgroundSize:'cover',color:'white'}}>
            {data.map(user=><div><h1>{user.name}</h1><h2>{user.username}</h2><h3>{user.email}</h3></div> )}
            
        </div>
    )
}

export default UserList
