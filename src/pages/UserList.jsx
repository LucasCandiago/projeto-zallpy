import UsersList from './../mocks/UsersList'

function UserList() {
    return (
        <div className='UserList'>
            <h1>Lista de usuários</h1>
            {UsersList.map((UsersList, id) => (
                    <div>
                    <p><strong>{UsersList.Nome}</strong> - {UsersList.Cargo}
                    </p>             
                    </div>
                ))}
        </div>
    )
}

export default UserList