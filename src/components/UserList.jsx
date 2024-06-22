import { useEffect, useState } from "react"

export const UserList = ({ endPoint }) => {

    const [data, setData] = useState([]) //mantiene el estado de data

    const fetchdata = async() => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            setData(data) //setea la variable data con la data recibida

        }catch(error) {
            console.log(error)
        }
    }

    useEffect( () => { fetchdata() }, [endPoint]) // 'escucha' el cambio de lo que se le mando(endPoint) y llama a la funcion cuando cambia
    // si la dependencia esta vacia no vuelve a llamar al endpont de la api

  return (
    <>
        <ul>
            { endPoint == 'users' ? data.map( dat => <li key={dat.id}>{dat.name}</li>)
                                  : data.map( dat => <li key={dat.id}>{dat.body}</li>)   
            }
        </ul>
    </>
  )
}
