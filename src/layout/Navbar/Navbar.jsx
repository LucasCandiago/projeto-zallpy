import Logo from './../../images/zallpy.png'
import { Link } from 'react-router-dom'
import { Nav, List, Item } from './styled/Navbar'

function Navbar() {
   
    return (
        <Nav>
            <Link to="/"><img alt='logo' src={Logo}></img></Link>
            <List>
                <Item><Link to="/">Home</Link></Item>
                <Item><Link to="/userList">Lista de Usuários</Link></Item>
            </List> 
        </Nav>
    )
}

export default Navbar