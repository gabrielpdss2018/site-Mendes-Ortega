import styles from './Atuacao.module.css';
import { Home as HomeIcon, Heart, Briefcase, Landmark, Gavel, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Atuacao = () => {
  const areas = [
    {
      title: 'Direito Civil',
      description: 'Assessoria em contratos, responsabilidade civil, direitos de propriedade e questões de vizinhança.',
      icon: <FileText size={32} />
    },
    {
      title: 'Direito de Família',
      description: 'Atuação sensível em divórcios, guarda de filhos, pensão alimentícia, inventários e partilhas.',
      icon: <Heart size={32} />
    },
    {
      title: 'Direito do Trabalho',
      description: 'Defesa dos direitos trabalhistas, rescisões, horas extras, assédio e consultoria preventiva.',
      icon: <Briefcase size={32} />
    },
    {
      title: 'Direito Previdenciário',
      description: 'Auxílio na obtenção de aposentadorias, pensões, auxílio-doença e outros benefícios do INSS.',
      icon: <Landmark size={32} />
    },
    {
      title: 'Direito Imobiliário',
      description: 'Regularização de imóveis, escrituras, ações possessórias e assessoria em compra e venda.',
      icon: <HomeIcon size={32} />
    },
    {
      title: 'Direito do Consumidor',
      description: 'Proteção contra práticas abusivas, cobranças indevidas e danos morais em relações de consumo.',
      icon: <Gavel size={32} />
    }
  ];

  return (
    <main>
      <section className={styles.header}>
        <div className="container">
          <h1>Áreas de Atuação</h1>
          <p>Soluções jurídicas para cada momento da sua vida.</p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {areas.map((area, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Não encontrou o que procurava?</h2>
            <p>Entre em contato conosco para uma análise preliminar do seu caso.</p>
            <Link to="/contato" className="btn-outline">Falar com uma advogada</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Atuacao;

