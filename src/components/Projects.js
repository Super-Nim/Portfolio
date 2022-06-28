// Import Assets
import cryptouniteimg from '../assets/cryptouniteimg.png';
import homePage2 from '../assets/homePage2.png';
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
                    <h3>Maxja-Project</h3>
                    <img src={homePage2} alt="Maxja Festival" />
                    <div className="text__container">
                    <p>An NFT Minter Dapp for the Maxja Festival 2022! Register for the airdrop, purchase your NFT ticket and view in the Dapp!
                    </p>
                    </div>
                    <div className="button__container">
                    <Button variant="contained" href="https://github.com/Super-Nim/Maxja-Sardegna" target="_blank" className="button" sx={{height: '36.5px'}}>Code</Button>
                    <Button variant="contained"  href="https://lucky-sun-8549.on.fleek.co/" target="_blank" className="button" sx={{height: '36.5px'}}>Site</Button>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>DEX</h3>
                    <img src={dex2} alt="Compound Landing Page" />
                    <div className="text__container">
                    <p>A Decentralized Exchange that uses a pre-funded DEX, trading chart, and limit orders on the Ropsten network.
                    </p>
                    </div>
                    <div className="button__container">
                    <Button variant="contained"  href="https://github.com/Super-Nim/DEX" target="_blank" className="button" sx={{height: '36.5px'}}>Code</Button>
                    <Button variant="contained"  href="https://raspy-recipe-8125.on.fleek.co/" target="_blank" className="button" sx={{height: '36.5px'}}>Site</Button>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>CryptoUnite</h3>
                    <img src={cryptouniteimg} alt="Uniswap Swap Page" />
                    <div className="text__container">
                    <p>My first project. A Decentralized charity that uses governance voting to decide where funds should be allocated
                    </p>
                    </div>
                    <div className="button__container">
                    <Button variant="contained" href="https://github.com/Super-Nim/Cryptounite" target="_blank" className="button" sx={{height: '36.5px'}}>Code</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;