import edenLogo from '../icons/edenLogo.png';

const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const h1Style = {
    margin: '0 0 0 6px',
}
function Header() {
    return (
        <header style={headerStyle} >
            <img src={edenLogo} alt="" />
            <h1 style={h1Style}>Eden</h1>
        </ header>


    )
}

export default Header;