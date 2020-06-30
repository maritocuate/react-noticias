import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
    
    const [status, actualizaStatus] = useState(stateInicial)

    const SelectNoticias = () => (
        <select className='browser-default' onChange={e => actualizaStatus(e.target.value)} value={status}>
            {opciones.map( (e, index) => (
                <option key={index} value={e.value}>{e.label}</option>
            ))}
        </select>
    )

    return [status, SelectNoticias]
}
 
export default useSelect;