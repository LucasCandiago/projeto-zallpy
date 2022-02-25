import UsersList from "../mocks/UsersList"

function Users() {
    return (
        <div className="Users">
            <h1>Usuários:</h1>
            {UsersList.map((UsersList, id) => (
                    <div className="user">
                    <p><strong>{UsersList.Nome}</strong></p>                 
                    <p>{UsersList.Cargo}</p>
                    <p>{UsersList.Situacao}</p>
                    <p>{UsersList.DataAdmissao}</p>  
                    <p>{UsersList.DataIntegracao}</p>  
                    <p>{UsersList.Time}</p>  
                    <p>{UsersList.Cliente}</p>
                    <br/>
                    </div>
                ))}
        </div>
    )
}

export default Users