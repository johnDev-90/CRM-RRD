import React from "react";
import { useNavigate, Form, redirect, useActionData } from "react-router-dom";
import { deleteClientes } from "../../Calls";
import { useEffect } from "react";
import { useState } from "react";
import Btns from "./Btns";

export async function action({ params }) {
  deleteClientes(params);
  return redirect("/");
}

const Data = ({ clients }) => {
  const [eliminar, seteliminar] = useState(false);

  const navigate = useNavigate();

  const datos = useActionData();

  useEffect(() => {
    if (eliminar === true) {
      navigate("/");
    }
  }, [eliminar]);

  function handleSubmit() {
    deleteClientes(clients, clients.id);
    seteliminar(true);
  }

  return (
    <>
      <tr className="row">
        <td className="td-tbody">
          <p className="fontBold">{clients.name}</p>
          <p className="fontBold">
            Company: <span className="fontNormal">{clients.company}</span>
          </p>
        </td>
        <td className="td-tbody">
          <p className="fontBold">
            Cell: <span className="fontNormal">{clients.telephone}</span>
          </p>
          <p className="fontBold">
            Email: <span className="fontNormal">{clients.email}</span>
          </p>
        </td>
        <td className="td-tbody">
          <Btns clients={clients} handleSubmit={handleSubmit} id={clients.id} />
        </td>
      </tr>
    </>
  );
};

export default Data;
