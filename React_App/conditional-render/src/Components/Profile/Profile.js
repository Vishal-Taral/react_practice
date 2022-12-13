
import {useState} from 'react'
const Profile = () => {
    // const [loggedIn, setLoggedIn] = useState(true);
    const loggedIn = "true"
  return (
    
    <div>
        {loggedIn ? <h1>welcome vishal</h1> : <h1>wecome guest</h1>}
    </div>
  )
}

export default Profile