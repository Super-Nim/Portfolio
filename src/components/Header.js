// Import Assets
import { Button } from '@mui/material';
import me from '../assets/me.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={me} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Hakeem Whitmore</h1>
                <p>Full Stack Developer</p>
                <Button variant="contained" href="mailto:mwo248@yahoo.com" className='button' sx={{marginTop: '15px'}}>Get In Touch</Button>
            </div>
        </section>
    );
}

export default Header;