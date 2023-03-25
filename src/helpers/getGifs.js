export const getGifs=async(category)=>{
    //url que usamos en la consulta en postman que funciono, solo le agregamos el https:// porque tiene que tener el protocolo
  const url=`https://api.giphy.com/v1/gifs/search?api_key=NJ8hlFJTK9IiaAK7FZdJhDjP6nIOX6PK&q=${category}&limit=10`;
  //en esta constante resp hago la peticion http:
  const resp=await fetch(url);
  //hago un console.log de la respuesta para ver que tenemos
  //ya pasó, ahora de la data:
  
  const {data=[]}=await resp.json();
  // console.log(resp)
  //esto retorna un objeto con las propiedades que le indique puede ser así:
  //o como l oque no esta comentado
  // const gifs=data.map(img=>{
  //   return{
  
  //   }
  // })
  const gifs=data.map(img=>
  ({id:img.id,
  title:img.title,
  url: img.images.downsized_medium.url})
  )
  // console.log(gifs)
  return gifs;
  }