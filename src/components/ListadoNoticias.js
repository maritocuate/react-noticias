import React from 'react';
import Noticia from './Noticia'

const ListadoNoticias = ({noticias}) => {
    return (
        <div className='row'>
            {noticias.map( (noticia, index)=>(
                <Noticia key={index} noticia={noticia}/>
            ))}
        </div>
    );
}
 
export default ListadoNoticias;