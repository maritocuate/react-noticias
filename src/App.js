import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=bef8acf416ef4b77936d25ec78d3df63`
      const query = await fetch(url)
      const response = await query.json()

      setNoticias(response.articles)
    }
    callApi()

  }, [categoria])

  return (
    <Fragment>
      <Header title='Buscador de Noticias'/>

      <div className='container white'>
        <Formulario setCategoria={setCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
