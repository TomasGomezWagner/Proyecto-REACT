import { useEffect, useState } from "react"
import { fetchdata } from "../helpers/fetchData"

export const UseFetchData = ( endPoint ) => {

    const [data, setData] = useState([]) //mantiene el estado de data
    const [isLoading, setIsLoading] = useState(true)

    //usar como promesa
    useEffect( () => { 
        fetchdata( endPoint )
        .then(
            res => {
                setData(res.data)
                setIsLoading(res.isLoading)
            }
        )
        }, [endPoint]) // 'escucha' el cambio de lo que se le mando(endPoint) y llama a la funcion cuando cambia si la dependencia esta vacia no vuelve a llamar al endpont de la api
    
    return {
        data,
        isLoading
    }
}

// // otra forma de usar una funcion asincrona en useEffect
// const getData = async() => {
//     const { data, isLoading} = await fetchdata(endPoint)
//     setData(data)
//     setIsLoading(isLoading)
// }
// useEffect( () => {
//     getData()
// }, [endPoint])