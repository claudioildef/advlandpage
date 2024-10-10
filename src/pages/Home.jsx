import React, { forwardRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../assets/styles/Home.module.css';

const Home = forwardRef((props, ref) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [telefone, setTelefone] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: nome,
      email: email,
      telefone: telefone,
      message: info,
    };

    emailjs.send('service_m13g42s', 'template_7nlxyh8', templateParams, 'pyqZ9xa0LwnGI11jp')
      .then((response) => {
        console.log('Email enviado com sucesso!', response);
      }, (err) => {
        console.error('Erro ao enviar o email:', err);
      });
  };

  return (
    <div className={styles.hero} ref={ref} id="contato">
      <div className={styles.heroTitle}>
        <h1>MONTEIRO CASTILHO ADVOGADOS</h1>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroDesc}>
            <h2>Quem somos</h2>
            <p>
              Somos um escritório de advocacia comprometido em fornecer soluções
              jurídicas eficientes e personalizadas para nossos clientes. Com anos de
              experiência e uma equipe altamente qualificada, estamos prontos para
              ajudá-lo em todas as suas questões legais.
            </p>
          </div>
        </div>
        <div className={styles.heroContent}>
          <h2>Entre em contato</h2>
          <p> E faça parte dessa estrutura</p>
          <form className={styles.formContato} onSubmit={sendEmail} >
            <div className={styles.input}>
              <label htmlFor="nome">Nome</label>
              <input
                placeholder='Seu Nome'
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input
                placeholder='Seu Email'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="telefone">Telefone</label>
              <input
                placeholder='19 99999-9999'
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="info">Informações Adicionais</label>
              <input
                placeholder='Nos dê mais detalhes'
                id="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <button className={styles.btnContato} type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Home;
