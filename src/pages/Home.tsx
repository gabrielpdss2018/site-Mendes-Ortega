import { ArrowRight, ShieldCheck, Users, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>Mendes & Ortega Advocacia</span>
            <h1>Excelência jurídica com proximidade e transparência.</h1>
            <p>
              Defendendo seus direitos com dedicação e expertise em Cáceres e região. 
              Soluções jurídicas modernas para questões complexas.
            </p>
            <div className={styles.actions}>
              <Link to="/contato" className="btn-primary">Agendar Consulta</Link>
              <Link to="/atuacao" className={styles.link}>Conheça nossas áreas <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Por que escolher o nosso escritório?</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <ShieldCheck size={40} className={styles.icon} />
              <h3>Ética e Sigilo</h3>
              <p>Tratamos cada caso com a máxima confidencialidade e rigor ético profissional.</p>
            </div>
            <div className={styles.featureCard}>
              <Users size={40} className={styles.icon} />
              <h3>Atendimento Humanizado</h3>
              <p>Entendemos que por trás de cada processo existe uma pessoa e uma história.</p>
            </div>
            <div className={styles.featureCard}>
              <Scale size={40} className={styles.icon} />
              <h3>Expertise Jurídica</h3>
              <p>Dras. especialistas com registro regular na OAB/MT e vasta experiência local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frase de Efeito */}
      <section className={styles.quote}>
        <div className="container">
          <blockquote>
            "A justiça é a constante e perpétua vontade de dar a cada um o que é seu."
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default Home;
