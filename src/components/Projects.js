// Import Assets
import cryptouniteimg from '../assets/cryptouniteimg.png';
import deximg2 from '../assets/deximg2.png';
import dex2 from '../assets/dex2.png'
import daoimg from '../assets/daoimg.png';

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
                    <a href="https://github.com/Super-Nim/Cryptounite" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DEX</h3>
                    <img src={dex2} alt="Compound Landing Page" />
                    <p>My best project. A Decentralized Exchange that uses chainlink oracles for its price feed, on the Kovan network.
                    </p>
                    <div className="button__container">
                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Super-Nim/DEX" target="_blank" className="button">Code</a>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>DAO</h3>
                    <img src={daoimg} alt="Aave Landing Page" />
                    <p>A basic Decentralized Autonomous Organization. Contributing makes you an investor who can then create proposals that others can vote on.
                    </p>
                    <a href="https://github.com/Super-Nim/DAO" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;