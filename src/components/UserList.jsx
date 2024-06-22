import { UseFetchData } from "../hooks/UseFetchData"

export const UserList = ({ endPoint }) => {

    const {data, isLoading} = UseFetchData(endPoint)

    return (
        <>
            <ul>
                { isLoading
                ? <p>Cargando...</p>
                : endPoint == 'users'
                    ? data.map( dat => <li key={dat.id}>{dat.name}</li>)
                    : data.map( dat => <li key={dat.id}>{dat.body}</li>)   
                }
            </ul>
        </>
    )
}
