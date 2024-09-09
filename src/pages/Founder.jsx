import React from 'react'
import founderImg from '../assets/img/thiago.jpg';
import '../assets/styles/Founder.css'

const Founder = () => {
    return (
        <div className="container">
            <h1>A Base</h1>
            <div className='founder'>
                <img src={founderImg} alt='Thiago Monteiro Castilho - Fundador' width={250}></img>
                <div className='graduation'>
                    <h3> Thiago Monteiro Castilho </h3>
                    <p>Pós Graduando em Direito Empresarial - FGV/SP,
                        Contabilidade Tributária - Instituto Brasileiro de
                        Estudos Tributários
                    </p>
                    <p>
                        Graduado em Direito pela
                        Universidade Paulista.
                    </p>

                    <p>
                        Em 2024, participará do Congresso Internacional de
                        Direito Civil na Universidade de Coimbra.</p>
                </div>

            </div>
        </div>
    )
}

export default Founder