import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <a href="https://github.com/moshea14" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </footer>
    );
}

export default Footer;