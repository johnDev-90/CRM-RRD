import React from "react";
import { getEDitedCCustomer, actualizarClientes } from "../Calls";
import { useLoaderData, Form, redirect, useActionData } from "react-router-dom";
import Error from "../src/components/Error";
import Formulario from "../src/components/Formulario";

export async function loader({ params }) {
  const editedCustomer = await getEDitedCCustomer(params.customerID);
  if (Object.values(editedCustomer).includes("")) {
    console.log("campos vacios");
  }

  return editedCustomer;
}

export async function action({ request, params }) {
  console.log(params);

  const formData = await request.formData();
  const customer = Object.fromEntries(formData);
  const email = formData.get("email");

  const errores = [];
  if (Object.values(customer).includes("")) {
    errores.push("All fields are required.");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("Please enter a valid email address");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  await actualizarClientes(params.customerID, customer);
  return redirect("/");
}

const Edit = () => {
  const editedCustomer = useLoaderData();
  const errores = useActionData();

  return (
    <>
      {errores?.length &&
        errores.map((error, i) => <Error key={i}>{error}</Error>)}
      <Form method="post">
        <Formulario editedCustomer={editedCustomer} />
      </Form>
    </>
  );
};

export default Edit;
