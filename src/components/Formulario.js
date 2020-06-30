import React from 'react';
import styles from './Formulario.module.css'

import useSelect from '../hooks/useSelect'

const Formulario = () => {

    const newsCategorias = [
        {value:'business', label:'Business'},
        {value:'entertainment', label:'Entertainment'},
        {value:'general', label:'General'},
        {value:'health', label:'Health'},
        {value:'science', label:'Science'},
        {value:'sports', label:'Sports'},
        {value:'technology', label:'Technology'}
    ]

    const [categoria, SelectorNoticias] = useSelect('general', newsCategorias)

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <h2 className={styles.heading}>Encuentra noticias</h2>

                <SelectorNoticias />

                <div className='input-field col s12'>
                    <input
                        type='submit'
                        className={`${styles['btn-block']} btn-large amber darken-2`}
                        value='Buscar'
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;