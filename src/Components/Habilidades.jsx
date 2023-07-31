import React from 'react'
import HTML from '../imagens/arquivo-html.png';
import JS from '../imagens/arquivo-js.png';
import CSS from '../imagens/arquivo-css.png';
import REACT from '../imagens/icons8-react-100.png';
import JAVA from '../imagens/java.png';
import PHP from '../imagens/php.png';
import WORDPRESS from '../imagens/wordpress.png';
import MYSQL from '../imagens/icons8-my-sql-48.png';



import "./Habilidades.css"

const Habilidades = () => {
  return (
    <div className='habilidades' id='habilidades'>
        <h1>HABILIDADES</h1>
        <div className="conteudo">
        <p>PRINCIPAIS:</p>
            <div className="icons">
                <img src={HTML} alt="" />
                <img src={JS} alt="" />
                <img src={CSS} alt="" />
                <img src={REACT} alt="" />
            </div>
        </div>
        <div className="conteudo">
            <p>TENHO CONHECIMENTOS:</p>
            <div className="icons">
                <img src={JAVA} alt="" />
                <img src={PHP} alt="" />
                <img src={WORDPRESS} alt="" />
                <img src={MYSQL} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Habilidades