import { ListUser } from "./styled/RenderUser";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RenderUser() {
  const [name, setName] = useState();
  const [situation, setSituation] = useState();
  const [admissionDate, setAdmissionDate] = useState();
  const [integrationDate, setIntegrationDate] = useState();
  const [titleJob, setTitleJob] = useState([]);
  const [team, setTeam] = useState([]);
  const [client, setClient] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setName(location.state.dados.name);
    setSituation(location.state.dados.situation);
    setAdmissionDate(location.state.dados.admissionDate);
    setIntegrationDate(location.state.dados.integrationDate);
    setTitleJob(location.state.dados.titleJob);
    setTeam(location.state.dados.team);
    setClient(location.state.dados.client);
  }, []);
  return (
    <ListUser>
      <div>
        <h2>{name}</h2>
        <p>Cargo: {titleJob.name}</p>

        {situation === "ADMITIDO" ? (
          <p>Situação: Admitido ✔️</p>
        ) : situation === "AGUARDANDO_DOCUMENTACAO" ? (
          <p>Situação: Aguardando Documentação ⚠️</p>
        ) : (
          <p>Situação: Desligado ❌</p>
        )}

        <p>Data de Admissão: {admissionDate}</p>
        <p>Data de Integração: {integrationDate}</p>

        <div>Times: </div>
        {team.map((id) => (
          <div>-{id.name} </div>
        ))}

        <br />

        <div>Clientes: </div>
        {client.map((id) => (
          <div>-{id.clientName} </div>
        ))}

        <br />

        <button>
          <Link to="/userList">Ver a Lista Completa</Link>
        </button>
      </div>
    </ListUser>
  );
}
