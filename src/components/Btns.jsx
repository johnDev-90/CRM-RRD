import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteClientes } from "../../Calls";
import { useState, useEffect } from "react";

const Btns = ({ clients, handleSubmit, id }) => {
  const [eliminar, seteliminar] = useState(false);

  useEffect(() => {
    if (eliminar === true) {
      navigate("/");
    }
  }, [eliminar]);

  function handleSubmit() {
    deleteClientes(clients, id);
    seteliminar(true);
  }
  const navigate = useNavigate();
  return (
    <div className="btns">
      <button
        className="editBtn"
        onClick={() => navigate(`/customers/${clients.id}/edit`)}
      >
        Edit
      </button>

      <button className="deleteBtn" onClick={(e) => handleSubmit()}>
        Delete
      </button>
    </div>
  );
};

export default Btns;
