import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logo}>
          Mendes <span>&</span> Ortega
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Início</Link></li>
            <li><Link to="/sobre" onClick={() => setIsOpen(false)}>O Escritório</Link></li>
            <li><Link to="/atuacao" onClick={() => setIsOpen(false)}>Áreas de Atuação</Link></li>
            <li><Link to="/contato" className="btn-primary" onClick={() => setIsOpen(false)}>Contato</Link></li>
          </ul>
        </nav>

        <button className={styles.mobileMenu} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
