import React, { forwardRef } from 'react';
import founderImg from '../assets/img/thiago.jpg';
import styles from '../assets/styles/Founder.module.css'; // Importando o CSS Module
import Values from './Values';

const Founder = forwardRef((props, ref) => {
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.box}>
                <h1>A Base</h1>
                <div className={styles.founder}>
                    <img src={founderImg} alt='Thiago Monteiro Castilho - Fundador' className={styles.founderImg}></img>
                    <div className={styles.graduation}>
                        <h3>Thiago Monteiro Castilho</h3>
                        <p>Pós Graduando em Direito Empresarial - FGV/SP, Contabilidade Tributária - Instituto Brasileiro de Estudos Tributários</p>
                        <p>Graduado em Direito pela Universidade Paulista.</p>
                        <p>Em 2024, participará do Congresso Internacional de Direito Civil na Universidade de Coimbra.</p>
                    </div>
                </div>
            </div>
            <div className={styles.values}>
                <Values></Values>
            </div>
        </div>
    );
});

export default Founder;
