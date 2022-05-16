// Import Assets
import cryptouniteimg from '../assets/cryptouniteimg.png';
import deximg2 from '../assets/deximg2.png';
import dex2 from '../assets/dex2.png'
import daoimg from '../assets/daoimg.png';
import { Button } from '@mui/material';

const daoStyle = {
    height: '200px'
}

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>CryptoUnite</h3>
                    <img src={cryptouniteimg} alt="Uniswap Swap Page" />
                    <p>My first project. A Decentralized charity that uses governance voting to decide where funds should be allocated
                    </p>
                    <Button variant="contained" href="https://github.com/Super-Nim/Cryptounite" target="_blank" className="button" sx={{height: '36.5px'}}>Code</Button>
                </div>

                <div className="projects__card">
                    <h3>DEX</h3>
                    <img src={dex2} alt="Compound Landing Page" />
                    <p>My best project. A Decentralized Exchange that uses a pre-funded DEX, trading chart, and limit orders on the Ropsten network.
                    </p>
                    <div className="button__container">
                    <Button variant="contained"  href="https://github.com/Super-Nim/DEX" target="_blank" className="button" sx={{height: '36.5px'}}>Code</Button>
                    <Button variant="contained"  href="https://raspy-recipe-8125.on.fleek.co/" target="_blank" className="button" sx={{height: '36.5px'}}>Site</Button>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>DAO</h3>
                    <img src={daoimg} alt="Aave Landing Page"  style={daoStyle} />
                    <p>Basic Decentralized Autonomous Organization. Contributing makes you an investor who can then create proposals that others can vote on.
                    </p>
                    <Button variant="contained"  href="https://github.com/Super-Nim/DAO" target="_blank" className="button">Code</Button>
                </div>
            </div>
        </section>
    );
}

export default Projects;