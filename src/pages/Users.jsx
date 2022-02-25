import UsersList from "../mocks/UsersList"

function Users() {
    return (
        <div className="Users">
            <h1>Usuários:</h1>
            {UsersList.map((UsersList, id) => (
                    <div className="user">
                    <h2>{UsersList.Nome}</h2>                 
                    <p>Cargo: {UsersList.Cargo}</p>
                    <p>Situação: {UsersList.Situacao}</p>
                    <p>Data de admissão: {UsersList.DataAdmissao}</p>  
                    <p>Data de integração: {UsersList.DataIntegracao}</p>  
                    <p>Time: {UsersList.Time}</p>  
                    <p>Cliente: {UsersList.Cliente}</p>
                    <br/>
                    </div>
                ))}
        </div>
    )
}

export default Users