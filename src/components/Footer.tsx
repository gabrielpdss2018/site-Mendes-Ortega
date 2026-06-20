import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Mendes <span>&</span> Ortega</h2>
          <p>Excelência jurídica com proximidade e transparência em Cáceres/MT.</p>
          <div className={styles.social}>
            <a href="https://instagram.com/mendeseortega" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @mendeseortega
            </a>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Contato</h3>
          <ul>
            <li>
              <Phone size={18} /> 
              <a href="https://wa.me/5565996368263" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                (65) 99636-8263
              </a>
            </li>
            <li>
              <Phone size={18} /> 
              <a href="https://wa.me/5565999890234" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                (65) 99989-0234
              </a>
            </li>
            <li><Mail size={18} /> contato@mendeseortega.adv.br</li>
          </ul>
        </div>




        <div className={styles.location}>
          <h3>Endereço</h3>
          <p><MapPin size={18} /> Rua Seis de Outubro, 677, Comercial Térreo, CEP: 78210-078. Cáceres/MT</p>
        </div>

      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mendes & Ortega Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

