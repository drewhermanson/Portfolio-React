import github from '../../Images/github.png';
import linkedin from '../../Images/linkedin.png';
import stackoverflow from '../../Images/stack.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className='icons'>
            <a href="https://github.com">
                <img src={github} alt="GitHub" />
            </a>
            <a href="https://linkedin.com">
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://stackoverflow.com">
                <img src={stackoverflow} alt="Stack Overflow" />
            </a>
        </div>
    );
}