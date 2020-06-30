import React from 'react';
import styles from './Formulario.module.css'

import useSelect from '../hooks/useSelect'

const Formulario = () => {

    const [categoria, SelectorNoticias] = useSelect('')

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