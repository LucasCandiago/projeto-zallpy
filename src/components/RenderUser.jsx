import UsersList from './../mocks/UsersList'
import styles from './RenderUser.module.css'

export default function RenderUser() {
    return(
        <div className={styles.user}>
            {UsersList.map((UsersList, id) => (
                <div>
                <p>Nome: {UsersList.name}</p>
                <p>Cargo: {UsersList.office}</p>
                <p>Situação: {UsersList.situation}</p>
                <p>Data de Admissão: {UsersList.admissionDate}</p>
                <p>Data de Integração: {UsersList.integrationDate}</p>
                <p>Time: {UsersList.team}</p>
                <p>Cliente: {UsersList.client}</p>
                <br></br>
                </div>
            ))}
        </div>
    )
}

