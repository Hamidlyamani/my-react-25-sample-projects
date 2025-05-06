import { useEffect, useState } from "react"
import { UserProfile } from "../../types"


export default function AutoComplete() {

    const [users, setUsers] = useState < UserProfile[]>([])
    const [newUsers, setNewUsers] = useState<UserProfile[]>([])
    const [value, setValue] = useState<string>('')
    const getusers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            if (data) {
                setUsers(data.users)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getusers();
    },[])
    const filterUsers = (e: string) => {
        let numbCar = e.length
        setValue(e)
        if (numbCar === 0) {
            setNewUsers([])  
        }else{
        setNewUsers(users.filter((item) => {
            return item.firstName.toLowerCase().slice(0, numbCar) === e.toLowerCase();
        }))
        }
}


    return (
        <div>
            <input type="text" name="" value={value} id="" placeholder="Search users here..." onInput={(e)=>{filterUsers(e.currentTarget.value)}}/>
            <ul>
                {
                    newUsers.map((item) => {
                        return <li onClick={(e) => { setValue(item.firstName) }}>{item.firstName} </li>
                    })    
}
            </ul>
        </div>
    )
}
