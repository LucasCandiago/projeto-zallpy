import UsersList from "../mocks/UsersList"
import RenderUserList from "../components/RenderUserList/RenderUserList"
import userService from "../service/userService";

function UserList() {

    return (
        <div>
            <RenderUserList list={UsersList} />
        </div>
    )
}

export default UserList