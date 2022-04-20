import UsersList from "../mocks/UsersList";
import RenderUserList from "../components/RenderUserList/RenderUserList";

function UserList() {
  return (
    <div>
      <RenderUserList list={UsersList} />
    </div>
  );
}

export default UserList;
