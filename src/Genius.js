import react, { Component } from 'react';
import Head from './componentes/Head.js';
import Bloco from './componentes/Bloco.js';
import Placar from './componentes/Placar.js';
import ReiniciarBTN from './componentes/ReiniciarBTN.js';

import './Genius.css';

function Genius() {
  return (
    <div className="Genius">
      <Head/>
      <div className="blocos">
        <Bloco>
            <div className="bloco1"></div>
            
        </Bloco>
        <Bloco>
            <div className="bloco2"></div>
        </Bloco>
        <Bloco>
            <div className="bloco3"></div>
        </Bloco>
        <Bloco>
            <div className="bloco4"></div>
        </Bloco>
      </div>
      <div className="footer">
          <Placar></Placar>
          <ReiniciarBTN></ReiniciarBTN>
      </div>
    </div>
  );
}

export default Genius;
