import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1>Zallpy Digital</h1>
            <ul className={styles.list}>
                <li><Link to="/" className={styles.item}>Home</Link></li>
                <li><Link to="/userList" className={styles.item}>Lista de Usuários</Link></li>
            </ul> 
        </div>
    )
}

export default Navbar