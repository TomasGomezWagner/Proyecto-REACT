import { useState } from "react"
import { UserList } from "./components/UserList"


export const UsesrsApp = () => {

    const [endPoint, setEndPoint] = useState('users')
    const handleClick = () => { 
        let end = endPoint == 'users' ? 'comments' : 'users'
        setEndPoint(end) 
    }
    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleClick}>Ver nombres</button>
        </>
    )
}
