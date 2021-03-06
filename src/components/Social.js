import { Button } from "@mui/material"

const Social = () => {
    return (
        <div className="social">
            <h2>Contact</h2>

            <Button variant="contained" href="mailto:keemwhitmore98@gmail.com" className="button">keemwhitmore98@gmail.com</Button>
            <Button variant="contained" href="https://www.linkedin.com/in/hakeem-whitmore/" className="button">LinkedIn</Button>
            <Button variant="contained" href="https://github.com/Super-Nim" className="button">GitHub</Button>
        </div>
    );
}

export default Social;