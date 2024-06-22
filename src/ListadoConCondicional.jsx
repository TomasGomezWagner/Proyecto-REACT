const Items = ({nombre, visto}) => {// con la tecla de windows y punto('.') podes poner emojis
    return(
        <li>
            {nombre}
            {visto && '✅' }
        </li> 
    )
}// (visto && 'algo') lo que hace es evaluar el primer elemento, si este el falso devuelve ese elemento(falso), de lo contrario devuelve el siguiente elemento
// el if ternario es como php variable_a_evaluar ? resultado true : resultado false


export const ListadoConCondicional = () => {
  return (
    <>
        <h1>Listado de Temas del Curso</h1>
        <ol>
            <Items nombre="Instalaciones necesarias" visto={true}></Items>
            <Items nombre="Uso de Vite" visto={true}></Items>
            <Items nombre="Componentes" visto={true}></Items>
            <Items nombre="Variables en JSX" visto={true}></Items>
            <Items nombre="Props" visto={true}></Items>
            <Items nombre="Eventos" visto={true}></Items>
            <Items nombre="useState" visto={true}></Items>
            <Items nombre="Redux" visto={false}></Items>
            <Items nombre="customHooks" visto={false}></Items>
        </ol>
        
    </>
  )
}
