import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
    
    const [status, actualizaStatus] = useState(stateInicial)
    
    const handleChange = e => {
        actualizaStatus(e.target.value)
    }

    const SelectNoticias = () => (
        <select className='browser-default' onChange={handleChange} value={status}>
            <option value=''>-Seleccione-</option>
            <option value='arg'>Argentina</option>
            <option value='bra'>Brasil</option>
        </select>
    )

    return [status, SelectNoticias]
}
 
export default useSelect;