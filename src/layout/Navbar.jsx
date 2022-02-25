import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <div className='Navbar'>
            <h1>Zallpy Digital</h1>
            <ul className={styles.list}>
                <li><Link to="/" className={styles.item}>Home</Link></li>
                <li><Link to="/UserList" className={styles.item}>Lista de Usuários</Link></li>
                <li><Link to="/Users" className={styles.item}>Usuários</Link></li>  
            </ul> 
        </div>
    )
}

export default Navbar