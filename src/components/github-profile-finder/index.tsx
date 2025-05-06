import {  useState } from 'react'
import User, { GitHubUser } from './user'
import  './style.css'

export default function ProfileFinder() {
    const [user, setUser] = useState<GitHubUser>()
    const [error, setError] = useState(false)
    const [loading, setloading] = useState(false)
    const [userID, setUserID] = useState<string>('')


       
    const fetchuser = async () => {
        setloading(true)
            try {
                const data = await fetch(`https://api.github.com/users/${userID}`)
                const userdata = await data.json()
                setUser(userdata);
                setloading(false);
                userdata.status == 404 ? setError(true) : null;
                
            } catch (error: any) {
                setError(true)
                console.log(error)
            }
        }



    return (
        <div className='profileFinder'>
            <div className="form">
                <input type="text" onChange={(e) => setUserID(e.target.value)}/>
                <button onClick={fetchuser}>search</button>
            </div>
            <div className="user">
                {error && <div>Error !!!</div>}
                {loading && <div>Wait, user are loading !!</div>}
                {user?.id && <User user={user} />}
                
            </div>
        </div>
    )
}
