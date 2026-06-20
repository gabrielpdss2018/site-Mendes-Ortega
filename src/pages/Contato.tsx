import styles from './Contato.module.css';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contato = () => {
  return (
    <main>
      <section className={styles.header}>
        <div className="container">
          <h1>Contato</h1>
          <p>Estamos prontos para ouvir você.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {/* Informações de Contato */}
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <div className={styles.iconCircle}><Phone size={24} /></div>
                <div>
                  <h3>Telefones e WhatsApp</h3>
                  <p style={{ marginBottom: '6px' }}>
                    <a href="https://wa.me/5565996368263" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle', color: '#25D366' }}>
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      (65) 99636-8263
                    </a>
                  </p>
                  <p>
                    <a href="https://wa.me/5565999890234" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle', color: '#25D366' }}>
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      (65) 99989-0234
                    </a>
                  </p>
                </div>
              </div>



              <div className={styles.infoItem}>
                <div className={styles.iconCircle}><Mail size={24} /></div>
                <div>
                  <h3>E-mails</h3>
                  <p style={{ marginBottom: '4px' }}><strong>Geral:</strong> contato@mendeseortega.adv.br</p>
                  <p style={{ marginBottom: '4px' }}><strong>Dra. Luitt:</strong> luitt@mendeseortega.adv.br</p>
                  <p><strong>Dra. Raquel:</strong> raquel@mendeseortega.adv.br</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <h3>Instagram</h3>
                  <a href="https://instagram.com/mendeseortega" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
                    @mendeseortega
                  </a>
                </div>
              </div>


              <div className={styles.infoItem}>
                <div className={styles.iconCircle}><MapPin size={24} /></div>
                <div>
                  <h3>Endereço</h3>
                  <p>Rua Seis de Outubro, 677, Comercial Térreo</p>
                  <p>CEP: 78210-078 — Cáceres/MT</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle}><Clock size={24} /></div>
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </div>


            {/* Formulário */}
            <div className={styles.formWrapper}>
              <h2>Envie uma mensagem</h2>
              <p>Preencha os campos abaixo e retornaremos em breve.</p>
              
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" placeholder="Seu nome" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" placeholder="seu@email.com" />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Assunto</label>
                  <select id="subject">
                    <option value="">Selecione um assunto</option>
                    <option value="civil">Direito Civil</option>
                    <option value="familia">Direito de Família</option>
                    <option value="trabalhista">Direito do Trabalho</option>
                    <option value="outro">Outros</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" rows={6} placeholder="Como podemos ajudar?"></textarea>
                </div>

                <button type="button" className="btn-primary" style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px'}}>
                  <MessageSquare size={20} /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa (Iframe Interativo) */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            title="Mapa de Localização Mendes & Ortega"
            src="https://maps.google.com/maps?q=Rua%20Seis%20de%20Outubro,%20677,%20C%C3%A1ceres%20-%20MT,%2078210-078&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className={styles.mapCardContainer}>
            <div className="container" style={{ width: '100%' }}>
              <div className={styles.mapCard}>
                <h4>Como Chegar</h4>
                <p>Rua Seis de Outubro, 677, Comercial Térreo</p>
                <p>CEP: 78210-078 — Cáceres/MT</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Seis+de+Outubro,+677,+C%C3%A1ceres+-+MT,+78210-078" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.mapLink}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;

