import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = 
    ({target})=>{
        setInputValue(target.value);
    }

    // hay otra forma mas facil de poner esto aun mas obvio lo de la 13 a 16 y es usar esa funcion en el papa la de onaddcategory
    const onSubmit=(event)=>{event.preventDefault()
      if(inputValue.trim().length<=1) return;
      // setCategories(categories=>[ inputValue, ...categories])
      setInputValue('');//para limpiar la caja de texto desp de colocar algo creo que como lo de adentro se re renderiza cuando la funcion esta temrine, por eso no importa el orden de eta funcion creo 
      onNewCategory(inputValue.trim());
    
    }
  return (
    <form onSubmit={onSubmit}>
    <input 
    type="text" 
    placeholder="Buscar gifs"
    value={inputValue}
    onChange={ onInputChange}
    />
    </form>
  )
}
