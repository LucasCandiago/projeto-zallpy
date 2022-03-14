import styles from './RenderUser.module.css'

export default function RenderUser({list}) {
    
    list.map((user) => (
        user.newDate = user.admissionDate.split('-').reverse().join('/'),
        user.newIntDate = user.integrationDate.split('-').reverse().join('/')
    ))
    
    return(
        <div className={styles.user}>
            {list.map((user, id) => (
                <div>
                <p>Nome: {user.name}</p>
                <p>Cargo: {user.tittle.name}</p>

                {user.situation === 'ADMITIDO' ? (
                    <p>Situação: Admitido</p>
                ) : user.situation === 'AGUARDANDO_DOCUMENTACAO' ? (
                    <p>Situação: Aguardando Documentação</p>
                ) : (
                    <p>Situação: Desligado</p>
                )}
                
                <p>Data de Admissão: {user.newDate}</p>
                <p>Data de Integração: {user.newIntDate}</p>

                {user.team.length > 1 ? (
                        <p>Time: {user.team[0].name}, {user.team[1].name}</p>
                    ): (
                        <p>Time: {user.team[0].name}</p>
                    )}
                
                <p>Cliente: {user.team[0].client}</p>
                <br/>
                </div>
            ))}
        </div>
    )
}

