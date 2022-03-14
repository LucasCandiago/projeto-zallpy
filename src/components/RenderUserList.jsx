import styles from './RenderUserList.module.css'
import { Link } from 'react-router-dom'

function RenderUserList({list}) {
    
    list.map((user) => (
        user.newDate = user.admissionDate.split('-').reverse().join('/'),
        user.newIntDate = user.integrationDate.split('-').reverse().join('/')
    ))

    return(
        <div className={styles.userList}>
            <table>
                <caption>Funcionários</caption>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Situação</th>
                        <th>Data de Admissão</th>
                        <th>Data de Integração</th>
                        <th>Time</th>
                        <th>Cliente</th>
                        <th>Mais</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user) => (
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.tittle.name}</td>

                    {user.situation === 'ADMITIDO' ? (
                        <td className={styles.admitido}>Admitido</td>
                    ) : user.situation === 'AGUARDANDO_DOCUMENTACAO' ? (
                        <td className={styles.aguardandoDoc}>Aguardando Documentação</td>
                    ) : (
                        <td className={styles.desligado}>Desligado</td>
                    )}

                    <td>{user.newDate}</td>
                    <td>{user.newIntDate}</td>
                    {user.team.length > 1 ? (
                        <td>{user.team[0].name}, {user.team[1].name}</td>
                    ): (
                        <td>{user.team[0].name}</td>
                    )}
                    <td>{user.team[0].client}</td>
                    <td><Link to="/user"><button>ver mais</button></Link></td>
                    </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}


export default RenderUserList