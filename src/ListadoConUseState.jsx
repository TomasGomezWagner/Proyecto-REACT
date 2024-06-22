import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items = ({nombre, visto}) => {// con la tecla de windows y punto('.') podes poner emojis
    return(
        <li className="listElement">
            {nombre}
            {visto ? '✅' : '❌'}
        </li> 
    )
}

export const ListadoConUseState = () => {

    const addTask = () => {
        setArreglo([...arreglo, {nombre:'nuevo', visto:false}])
    }

    let listadoSecciones = [
        {id:0 ,nombre: "Instalaciones necesarias", visto: true },
        {id:1 ,nombre: "Uso de Vite", visto: true },
        {id:2 ,nombre: "Componentes", visto: true },
        {id:3 ,nombre: "Variables en JSX", visto: true },
        {id:4 ,nombre: "Props", visto: true },
        {id:5 ,nombre: "Eventos", visto: true },
        {id:6 ,nombre: "useState", visto: true },
        {id:7 ,nombre: "Redux", visto: false },
        {id:8 ,nombre: "customHooks", visto: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones) //hook

    const onAddTask = (val) => {
        let valor = val.trim()
        if(valor < 1 ) return // input tiene por lo menos un caracter
        const datoNuevo = {
            id: arreglo.length,
            nombre: valor,
            visto: false,
        }
        setArreglo([...arreglo, datoNuevo])
    }
    
    return (
        <>
            <h1>Listado de Temas del Curso</h1>

            <AgregarTarea setter={onAddTask}></AgregarTarea>

            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
            

            {/* <button onClick={() => addTask()}>Agregar Tarea</button> */}
        </>
    )
}


// (visto && 'algo') lo que hace es evaluar el primer elemento, si este el falso devuelve ese elemento(falso), de lo contrario devuelve el siguiente elemento
// el if ternario es como php variable_a_evaluar ? resultado true : resultado false

// clases de CSS
// las clases de css se tienen que poner con el nombre de "className" y no class como en HTML porque no es HTML es JSX!!


//key deberia ser un id unico. Como que lo necesita react 
// Se usa map porque devuelve una lista y eso es lo que necesita react. Se puede hacer con un forEach por ej pero se tiene que armar
// la lista y despues pasarla sola

// atomic design
// componentes muy pequenios 'indivisibles' (ej botones)
// interfaz de usuario de lo mas chico a lo mas grande

// spread operator
// [...arreglo, {nombre:'nuevo', visto:false}] 
// lo que hace los puntos-nombreArray es como hacer una copia del array y despues se le agrega lo que le pases.
// es para no modificar el array original.