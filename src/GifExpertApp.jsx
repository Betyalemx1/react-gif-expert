import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = ()=>{
    const [categories, setCategories]=useState(['Sailor Moon']);

    const onAddCategory= (newCategory)=>{
        if(categories.includes(newCategory)) return;
        //SE PUEDE MANEJAR ASI CON CATEGORIES.INCLUDES PORQue pues aunque pongamos
        //sailor moon y Sailor Moon pues es distsinto pero si quieren ser más estrictos podrían evaluarlo con algún find y pasar todos los valores a lowercase o sea minusculas o a la hora de insertarlos en el setcategories de aqui abajo lo insertan como lowercase
        // esta es la funcion que solo usaremos para modificar nuestro state
        //categories.push('valorant')
        // setCategories(cat=>[...cat, 'valorant']) //o asi es la otra forma para llamarlo
        // console.log(newCategory)
            //   categories.push(newCategory)
        setCategories([newCategory, ...categories,]); 
        //primera forma para llamarlo
        // console.log('valorant')
 
    };
;
    return(
<>
{/* título */}
<h1>
    GifExpertApp
</h1>
{/* input */}
<AddCategory 
// setCategories={setCategories}
onNewCategory={(value)=>onAddCategory(value)}
currentCategories={categories}
/>
{/* listado de items o gifs */}


    {categories.map((category)=>
      (
            <GifGrid category={category} key={category}/>
        )
    )}
    {/* <li>ABC</li> */}

{/* gifItem */}
</>
    )
};