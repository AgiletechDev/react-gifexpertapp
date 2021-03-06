import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const [images, setImages] = useState([])


    //en el caso que tuvieramos un boton que refresque el componente con useState no repetiria la carga de imagenes
    useEffect(()=>{  //EL COMPONENTE SOLO SERA EJECUTADO POR PRIMER VEZ
        getGifs(category)
            .then(imgs => setImages(imgs))
    }, [category]) //si cambia la categoria se vuelve ejecutar el cuerpo de useEffects



   // getGifs();

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'> {category} </h3>
        <div >
          
            <ol className="card-grid">{
                images.map((img)=>(
                    <GifGridItem 
                        key={img.id}
                        {...img} />
                        
                    ))
            }
            </ol>
        </div>
        </>

       /*   <div>
            <h3> {category} </h3>
            <ol>{
                images.map(({id, title})=>(
                    <li key={id} > {title} </li>
                        
                    ))
            }
            </ol>
        </div> */
    )
}
