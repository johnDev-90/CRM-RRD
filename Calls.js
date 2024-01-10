import { redirect } from "react-router-dom";

export async function getCustomers() {
  try {
    const answer = await fetch(import.meta.env.VITE_API_URL);
    const result = await answer.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getEDitedCCustomer(id) {
  try {
    const answer = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await answer.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarClientes(id, datos) {
  try {
    const answer = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await answer.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClientes(clientes, id) {
  try {
    const answer = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
      body: JSON.stringify(clientes),

      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function addNewCustomer(customer) {
  try {
    const answer = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await answer.json();
  } catch (error) {
    console.log(error);
  }
}
