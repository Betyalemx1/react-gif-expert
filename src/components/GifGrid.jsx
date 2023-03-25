
// import { getGifs } from "../helpers/getGifs" se paso al hook
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
//aqui hacemos la peticion html del api
export const GifGrid = ({category}) => {
  // const [counter, setCounter] = useState(10);
  const {images, isLoading}=useFetchGifs(category);

// const [images,setImages] = useState([]);

// const getImages=async()=>{
//   const newImages=await getGifs(category);
//   setImages(newImages);

// }

//   useEffect(() => {
//     getImages();
//     // return () => {
//     //   second
//     // }
//     return
//   }, [])
  

//   const getGifs=async()=>{
//     //url que usamos en la consulta en postman que funciono, solo le agregamos el https:// porque tiene que tener el protocolo
//   const url=`https://api.giphy.com/v1/gifs/search?api_key=NJ8hlFJTK9IiaAK7FZdJhDjP6nIOX6PK&q=${category}&limit=20`;
//   //en esta constante resp hago la peticion http:
//   const resp=await fetch(url);
//   //hago un console.log de la respuesta para ver que tenemos
//   //ya pasó, ahora de la data:

//   const {data=[]}=await resp.json();
//   // console.log(resp)
//   //esto retorna un objeto con las propiedades que le indique puede ser así:
//   //o como l oque no esta comentado
//   // const gifs=data.map(img=>{
//   //   return{

//   //   }
//   // })
//   const gifs=data.map(img=>
//   ({id:img.id,
//   title:img.title,
// url: img.images.downsized_medium.url})
//   )
//   console.log(gifs)
//   }
  //aqui lo mando llamar para que se ejecute dentro del componente inmediatamente cuando se crea el componente. esto es una pesima practica
  // getGifs(category);
  // si queremos ciclo infinito dejar esto: setCounter(counter+1);

  return (
    <>
    <h3>{category}</h3>
    {isLoading &&(<h2>Cargando...</h2>)}
    
   <div className='card-grid'>
    {images.map((image)=>(
    // <li key={id}>{title}</li>
    <GifItem key={image.id}
    {...image} />
    ))
    }
   </div>

    </>
  )
}
