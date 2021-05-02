import React from 'react';

import '../App.css';
import Noticia from './Noticia.js';
import Anuncio from './Anuncio.js';

import {noticias} from './Noticias.json';
import {Row,Container} from 'reactstrap';





class Main extends React.Component{
  constructor(){
    super();
    this.state={
      noticias
    };
  }


render(){
const mostrarNoticias = this.state.noticias.map(
    (noticias,i) => {
      return ( 
      <Container >
      <Noticia
        key ={i}
        imagen ={noticias.imagen}
        cabezal={noticias.cabezal}
        contenido={noticias.contenido}
        />
      </Container>
      
      )}
  );
   
    return (
    <div>
        
        <h1>Sección de noticias</h1>
        
        {mostrarNoticias}
      
    </div>
  );
}
}

export default Main;