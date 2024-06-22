import { useState } from "react"

export const AgregarTarea = ( {setter} ) => {

    const [inputValue, setInputValue] = useState ('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        const datoNuevo = {
            nombre: inputValue,
            visto: false,
        }
        event.preventDefault()
        setter(datos => [...datos, datoNuevo]) // en este caso se esta usando la info que ya esta(lista), se hace una copia y se agrega el nuevo dato 
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder='ingresa tarea' 
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}

// event se podria desestructurar de la siguiente manera:
// ({target}) y despues se usa directamente target.value

// setter es la funcion del useState del padre que modifica a la lista
