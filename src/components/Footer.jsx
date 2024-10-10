import React from 'react';
import styles from '../assets/styles/Footer.module.css'; // Supondo que o arquivo CSS esteja nesta pasta
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h4>Siga-nos</h4>
                    <p>juridico@monteirocastilhoadv.com</p>
                    <p>Telefone (11) 9 4708-7825</p>
                </div>
                <div className={styles.footerSection}>
                    <div className={styles.socialIcons}>

                        <a href="https://www.instagram.com/monteiro_castilho_advogados/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/thiago-monteiro-castilho-8aa375185/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <p className={styles.footerRights}>&copy; 2024 Thiago Monteiro Castilho. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;