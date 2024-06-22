import { useState } from "react"
import { UserList } from "./components/UserList"


export const UsesrsApp = () => {

    // useEffect( () => { fetchUsers() }, [] ) //hace que solo se cargue al cargar la pag. por eso se le manda el segundo argumento vacio(dependencia)

    const [endPoint, setEndPoint] = useState('users')

    const handleClick = () => { 
        let end = endPoint == 'users' ? 'comments' : 'users'
        console.log(end)
        setEndPoint(end) 
    
    } // con esto y agregando en el return ( <button onClick={handleClick}>Ver nombres</button> ) podes no usar el useEfect

    return (
    <>
        <h1>Lista de usuarios</h1>
        <UserList endPoint={endPoint}></UserList>

        <button onClick={handleClick}>Ver nombres</button>
    </>
  )
}
