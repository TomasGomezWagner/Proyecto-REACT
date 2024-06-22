import { useState } from "react"

const Items = ({nombre, visto}) => {// con la tecla de windows y punto('.') podes poner emojis
    return(
        <li className="listElement">
            {nombre}
            {visto ? '✅' : '❌'}
        </li> 
    )
}// (visto && 'algo') lo que hace es evaluar el primer elemento, si este el falso devuelve ese elemento(falso), de lo contrario devuelve el siguiente elemento
// el if ternario es como php variable_a_evaluar ? resultado true : resultado false

// clases de CSS
// las clases de css se tienen que poner con el nombre de "className" y no class como en HTML porque no es HTML es JSX!!


export const ListadoConUseState = () => {

    const addTask = () => {
        setArreglo([...arreglo, {nombre:'nuevo', visto:false}])
    }

    let listadoSecciones = [
        {nombre: "Instalaciones necesarias", visto: true },
        {nombre: "Uso de Vite", visto: true },
        {nombre: "Componentes", visto: true },
        {nombre: "Variables en JSX", visto: true },
        {nombre: "Props", visto: true },
        {nombre: "Eventos", visto: true },
        {nombre: "useState", visto: true },
        {nombre: "Redux", visto: false },
        {nombre: "customHooks", visto: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones) //hook
    
    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
            
            <button onClick={() => addTask()}>Agregar Tarea</button>
        </>
    )
}//key deberia ser un id unico. Como que lo necesita react 
// Se usa map porque devuelve una lista y eso es lo que necesita react. Se puede hacer con un forEach por ej pero se tiene que armar
// la lista y despues pasarla sola

// atomic design
// componentes muy pequenios 'indivisibles' (ej botones)
// interfaz de usuario de lo mas chico a lo mas grande

// spread operator
// [...arreglo, {nombre:'nuevo', visto:false}] 
// lo que hace los puntos-nombreArray es como hacer una copia del array y despues se le agrega lo que le pases.
// es para no modificar el array original.