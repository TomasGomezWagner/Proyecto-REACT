import { useState } from "react"

export const ContadorApp = ({value}) => { //value lo manda el padre(main)
    
    const [contador, setContador] = useState (value) // [variable, funcion modificadora] = useState (valor pasado del padre/valor por defecto)
    
    const handleClick = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador: </h1>
            <p>{contador}</p>
            <button onClick={handleClick}>
                Soy un Boton
            </button>
        </>
    )
}





// export const ContadorApp = ({value}) => {
// // la funcion tiene que estar dentro del componente para poder usar el valor del padre????
//     const handleClick = () => {
//         value += 1
//         console.log(value)
//     }

//     return (
//         <> 
//             <h1>Contador: </h1>
//             <p>{ value }</p>
//             <button onClick={ handleClick }>
//                 soy un boton
//             </button>
//         </>
//     )
// }





// se puede hacer un componente mas pequenio por fuera y usarlo dentro de otro

// function handleClick(event, arg) {
//         console.log(event)
//         console.log(arg)
//     }

// const Button = () => {
//     return (
////         <button onClick={ handleClick }> esto es si SOLO tiene un argumento
//         <button onClick={(event) => handleClick(event, 'este es otro argumento')}>
//             soy un boton
//         </button>
//     )
// }


// export const ContadorApp = () => {
//   return (
//     <>
//         <h1>Contador: </h1>
//         <Button></Button>
//     </>
//   )
// }
