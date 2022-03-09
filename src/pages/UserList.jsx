import UsersList from "../mocks/UsersList"
import RenderUserList from "../components/RenderUserList"
import { useEffect, useState } from "react"

function UserList() {
    
    const [ userList, setUserList ] = useState([]);    

    function getUser(){
        setUserList(UsersList)
    }

    useEffect(() => {getUser()},[])

    return (
        <div>
            <RenderUserList list={userList} />
        </div>
    )
}

export default UserList