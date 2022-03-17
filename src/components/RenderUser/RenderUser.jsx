import { ListUser } from "./styled/RenderUser"

export default function RenderUser({list}) {
    
    list.map((user) => (
        user.newDate = user.admissionDate.split('-').reverse().join('/'),
        user.newIntDate = user.integrationDate.split('-').reverse().join('/')
    ))
    
    return(
        <ListUser>
            {list.map((user) => (
                <div>
                <p>Nome: {user.name}</p>
                <p>Cargo: {user.titleJob.name}</p>

                {user.situation === 'ADMITIDO' ? (
                    <p>Situação: Admitido</p>
                ) : user.situation === 'AGUARDANDO_DOCUMENTACAO' ? (
                    <p>Situação: Aguardando Documentação</p>
                ) : (
                    <p>Situação: Desligado</p>
                )}
                
                <p>Data de Admissão: {user.newDate}</p>
                <p>Data de Integração: {user.newIntDate}</p>

                <p>Times: {user.team.map((id) => (
                    <>-{id.name} </>
                ))}</p>
            
                <p>Clientes: {user.client.map((id) => (
                    <>-{id.clientName} </>
                ))}</p>
                <br/>
                </div>
            ))}
        </ListUser>
    )
}

