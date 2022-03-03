import UsersList from "../mocks/UsersList"
import styles from './RenderUserList.module.css'
import { Link } from "react-router-dom"

function RenderUserList() {
    return(
        <div className={styles.userList}>
            <h1>Lista de usuários</h1>
            {UsersList.map((UsersList, id) => (
                    <div>
                    <p><Link to="/user" className={styles.item}>{UsersList.name}</Link> - {UsersList.office}
                    </p>
                    </div>
                ))}
        </div>
    )
}

export default RenderUserList