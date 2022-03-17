import RenderUser from "../components/RenderUser/RenderUser"
import UsersList from "../mocks/UsersList";
import { useState, useEffect } from "react";

function User() {
    const [ userList, setUserList ] = useState([]);    

    function getUser(){
        setUserList(UsersList)
    }

    useEffect(() => {getUser()},[])

    return (
        <div>
            <RenderUser list={userList}/>
        </div>
    )
}

export default User