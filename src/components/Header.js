import { Typography } from '@mui/material';
import edenLogo from '../icons/edenLogo.png';
import styles from '../styles/styles.module.css'

function Header() {
    return (
        <header className={styles['header']} >
            <img src={edenLogo} alt="Eden" width="38px" />
            <Typography variant='h1'>Eden</Typography>
        </ header>


    )
}

export default Header;