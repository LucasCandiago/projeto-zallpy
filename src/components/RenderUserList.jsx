import styles from './RenderUserList.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Input from './Input'

function RenderUserList({list}) {
    
    const [searchText, setSearchText] = useState('');

    const [searchTitleJob, setSearchTitleJob] = useState('')

    const [ userList, setUserList ] = useState(list);    

    useEffect(() => {
        if(searchText === '') {
            setUserList(list);
        } else {
            setUserList(
                list.filter(item => {
                    if(item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            )
        }
    }, [searchText]);

    useEffect(() => {
        if(searchTitleJob === '') {
            setUserList(list);
        } else {
            setUserList(
                list.filter(item => {
                    if(item.titleJob.name.toLowerCase().indexOf(searchTitleJob.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            )
        }
    }, [searchTitleJob]);

    userList.map((user) => (
        user.newDate = user.admissionDate.split('-').reverse().join('/'),
        user.newIntDate = user.integrationDate.split('-').reverse().join('/')
    ))

    return(
        <div className={styles.userList}>

            <Input
            type="text"
            placeholder="Pesquise uma pessoa"
            value={searchText}
            onChange={(t) => (setSearchText(t.target.value))} /> 
            
            <Input
            type="text"
            placeholder="Pesquise por cargo"
            value={searchTitleJob}
            onChange={(t) => (setSearchTitleJob(t.target.value))} /> 

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
                    {userList.map((user) => (
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.titleJob.name}</td>

                    {user.situation === 'ADMITIDO' ? (
                        <td className={styles.admitido}>Admitido</td>
                    ) : user.situation === 'AGUARDANDO_DOCUMENTACAO' ? (
                        <td className={styles.aguardandoDoc}>Aguardando Documentação</td>
                    ) : (
                        <td className={styles.desligado}>Desligado</td>
                    )}

                    <td>{user.newDate}</td>
                    <td>{user.newIntDate}</td>
                        
                    <td>{user.team.map((id) => (
                        <p className={styles.team}>{id.name}</p>
                    ))}</td>
                
                    <td>{user.team.map((id) => (
                        <p className={styles.team}>{id.client}</p>
                    ))}</td>

                    <td><Link to="/user"><button>ver mais</button></Link></td>
                    </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}


export default RenderUserList