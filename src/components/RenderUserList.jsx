import styles from './RenderUserList.module.css'
import { Link } from 'react-router-dom'

function RenderUserList({list}) {

    
    return(
        <div className={styles.userList}>
            <h1>Lista de usuários</h1>
            {list.map((user, id) => (
                    <div>
                    <p><strong>{user.name}</strong> - {user.office} <Link to="/user"><button>ver mais</button></Link>
                    </p>
                    </div>
                ))}
        </div>
    )
}


export default RenderUserList