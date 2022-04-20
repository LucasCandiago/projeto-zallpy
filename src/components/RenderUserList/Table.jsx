import { useNavigate } from "react-router-dom";
import {
  UsersTable,
  Caption,
  Td,
  Tr,
  Th,
  Admitido,
  AguardandoDoc,
  Desligado,
  Team,
  Client,
} from "./styled/Table";

function Table({ userList }) {
  const navigate = useNavigate();

  function renderUser(user) {
    navigate("/user", { state: { dados: user } });
  }

  return (
    <UsersTable>
      <Caption>Funcionários</Caption>
      <thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Cargo</Th>
          <Th>Situação</Th>
          <Th>Data de Admissão</Th>
          <Th>Data de Integração</Th>
          <Th>Time</Th>
          <Th>Cliente</Th>
          <Th>Mais</Th>
        </Tr>
      </thead>
      <tbody>
        {userList.map((user) => (
          <Tr>
            <Td>{user.name}</Td>
            <Td>{user.titleJob.name}</Td>

            {user.situation === "ADMITIDO" ? (
              <Admitido>Admitido</Admitido>
            ) : user.situation === "AGUARDANDO_DOCUMENTACAO" ? (
              <AguardandoDoc>Aguardando Documentação</AguardandoDoc>
            ) : (
              <Desligado>Desligado</Desligado>
            )}

            <Td>{user.newDate}</Td>
            <Td>{user.newIntDate}</Td>

            <Td>
              {user.team.map((id) => (
                <Team>{id.name}</Team>
              ))}
            </Td>

            <Td>
              {user.client.map((id) => (
                <Client>{id.clientName}</Client>
              ))}
            </Td>

            <Td>
              <button onClick={() => renderUser(user)}>ver mais</button>
            </Td>
          </Tr>
        ))}
      </tbody>
    </UsersTable>
  );
}

export default Table;
