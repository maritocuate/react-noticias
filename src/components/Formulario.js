import React from 'react';
import styles from './Formulario.module.css'

const Formulario = () => {
    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <h2 className={styles.heading}>Encuentra noticias</h2>

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