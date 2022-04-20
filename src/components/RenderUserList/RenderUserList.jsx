import { useState, useEffect } from "react";
import Input from "../Input/Input";
import { Filters, UserList } from "./styled/RenderUserList";
import Table from "./Table";

function RenderUserList({ list }) {
  const [searchText, setSearchText] = useState("");

  const [searchTitleJob, setSearchTitleJob] = useState("");

  const [userList, setUserList] = useState(list);

  useEffect(() => {
    if (searchText === "") {
      setUserList(list);
    } else {
      setUserList(
        list.filter((item) => {
          if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText]);

  useEffect(() => {
    if (searchTitleJob === "") {
      setUserList(list);
    } else {
      setUserList(
        list.filter((item) => {
          if (
            item.titleJob.name
              .toLowerCase()
              .indexOf(searchTitleJob.toLowerCase()) > -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchTitleJob]);

  userList.map(
    (user) => (
      (user.newDate = user.admissionDate.split("-").reverse().join("/")),
      (user.newIntDate = user.integrationDate.split("-").reverse().join("/"))
    )
  );

  return (
    <UserList>
      <Filters>
        <Input
          type="text"
          placeholder="Pesquise uma pessoa"
          value={searchText}
          onChange={(t) => setSearchText(t.target.value)}
        />

        <Input
          type="text"
          placeholder="Pesquise por cargo"
          value={searchTitleJob}
          onChange={(t) => setSearchTitleJob(t.target.value)}
        />
      </Filters>

      <Table userList={userList} />
    </UserList>
  );
}

export default RenderUserList;
