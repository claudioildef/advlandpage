import React, { forwardRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../assets/styles/Home.module.css';

const Home = forwardRef((props, ref) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: nome,
      email: email,
      telefone: telefone,
      servico: servico,
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
              Somos comprometidos em fornecer soluções eficientes e personalizadas.
              Com anos de experiência e uma equipe altamente qualificada, entregamos com excelência nossos serviços jurídicos.
            </p>
          </div>
        </div>
        <div className={styles.heroContent}>
          <h2>Agendamento de Consultas</h2>
          <p> Faça parte dessa estrutura</p>
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
            <div className={styles.inlineInputs}>
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
                <label htmlFor="servicos">Selecione um Serviço</label>
                <select
                  id="servicos"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Civil">Civil</option>
                  <option value="Trabalhista">Trabalhista</option>
                  <option value="Familia e Sucessoes">Família e Sucessões</option>
                  <option value="Previdenciario">Previdenciário</option>
                  <option value="Penal">Penal</option>
                  <option value="Empresarial">Empresarial</option>
                  <option value="Ambiental">Ambiental</option>
                </select>
              </div>
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
