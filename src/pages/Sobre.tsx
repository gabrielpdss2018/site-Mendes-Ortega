import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <main>
      <section className={styles.header}>
        <div className="container">
          <h1>O Escritório</h1>
          <p>Compromisso com a justiça e com você.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.bio}>
              <div className={styles.profileHeader}>
                <span className={styles.oab}>OAB/MT Nº 10.717</span>
                <h2>Dra. Luitt Conceição Ortega</h2>
              </div>
              <p>
                A Dra. Luitt Conceição Ortega possui uma trajetória marcada pela excelência no atendimento jurídico. 
                Sua atuação é pautada na transparência e no compromisso inabalável com os direitos de seus clientes, 
                trazendo uma visão humanizada para as resoluções de conflitos em Cáceres e região.
              </p>
              <div className={styles.specialties}>
                <h3>Especialidades principais</h3>
                <ul>
                  <li>Consultoria Jurídica Estratégica</li>
                  <li>Direito Civil e Contratos</li>
                  <li>Atendimento Personalizado</li>
                </ul>
              </div>
            </div>

            <div className={styles.bio}>
              <div className={styles.profileHeader}>
                <span className={styles.oab}>OAB/MT Nº 13.063</span>
                <h2>Dra. Raquel Mendes dos Santos</h2>
              </div>
              <p>
                Com foco na ética e na busca pelas soluções mais eficientes, a Dra. Raquel Mendes dos Santos 
                dedica sua carreira a oferecer uma advocacia moderna e ágil. Sua experiência técnica permite uma análise 
                técnica profunda, garantindo segurança jurídica e proximidade em cada etapa do processo.
              </p>

              <div className={styles.specialties}>
                <h3>Especialidades principais</h3>
                <ul>
                  <li>Direito Processual</li>
                  <li>Estratégia Contenciosa</li>
                  <li>Gestão de Riscos Jurídicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h4>Missão</h4>
              <p>Prestar serviços jurídicos de alta qualidade, auxiliando nossos clientes na proteção de seus direitos e interesses.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Visão</h4>
              <p>Ser referência em advocacia em Mato Grosso, reconhecida pela excelência técnica e atendimento humano.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Valores</h4>
              <p>Ética, transparência, compromisso, agilidade e respeito incondicional ao cliente.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
