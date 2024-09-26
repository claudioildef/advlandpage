import React, { useState } from 'react';
import '../assets/styles/Founder.css';
import '../assets/styles/Values.css';

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Armazena o índice da descrição ativa

  const values = [
    { title: 'Intelectualidade e Pessoalidade', description: 'A combinação do conhecimento profundo e técnico, aliado a uma abordagem humanizada. Os advogados que praticam esses valores buscam soluções inovadoras e adaptadas às necessidades específicas de cada cliente. Essa combinação garante não apenas a excelência jurídica, mas também um atendimento que valoriza a individualidade e a construção de uma relação de confiança, essencial para um serviço eficaz e próximo.' },
    { title: 'Democratização do Acesso Jurídico', description: 'Garantir que todos, independentemente de renda ou posição social, tenham acesso aos serviços legais. Isso envolve oferecer soluções acessíveis, simplificadas e justas, para que todos possam exercer seus direitos. A advocacia se torna uma ferramenta de inclusão, promovendo igualdade e justiça para todos.' },
    { title: 'Igualdade e Justiça', description: 'Compromisso com a equidade, assegurando que todos sejam tratados de forma justa perante a lei, sem discriminação. O advogado busca defender os direitos de cada indivíduo com imparcialidade, promovendo o equilíbrio nas relações jurídicas. Esses valores fundamentam a luta por uma sociedade mais justa e inclusiva.' },
    { title: 'Família e Negócios', description: 'Importância de proteger os interesses familiares ao conduzir atividades empresariais. Os advogados atuam como facilitadores na harmonização das dinâmicas familiares e empresariais, ajudando na elaboração de contratos, planejamento sucessório e resolução de conflitos. Esse valor promove uma gestão equilibrada que assegura a continuidade dos negócios enquanto preserva os laços familiares.' },
    { title: 'Suporte ao Pequeno Empreendedor', description: 'Prestação de serviços jurídicos acessíveis e personalizados, focados nas necessidades específicas de pequenos negócios. Os advogados oferecem orientação em questões como registro de empresas, contratos e compliance, ajudando os empreendedores a navegar por desafios legais. Esse apoio é essencial para fomentar o crescimento sustentável e a viabilidade das iniciativas locais, promovendo um ambiente de negócios mais justo e dinâmico.' },
  ];

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='values-background'>
      <h1>A Essência</h1>
      <div className='values-list'>
        {values.map((value, index) => (
          <React.Fragment key={index}>
            <div className={`value${activeIndex === index ? '-active' : ''}`} onClick={() => toggleDescription(index)}>
              <span>{value.title}</span>
            </div>
            <div className={`description ${activeIndex === index ? 'description-visible' : ''}`}>
              <p>{value.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Values;
