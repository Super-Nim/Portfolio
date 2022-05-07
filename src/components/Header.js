// Import Assets
import me from '../assets/me.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={me} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Hakeem Whitmore</h1>
                <p>Full Stack Developer</p>
                <a href="mailto:mwo248@yahoo.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;