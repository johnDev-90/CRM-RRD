import React from "react";
import { Form } from "react-router-dom";
import Formulario from "../src/components/Formulario";
import { useActionData } from "react-router-dom";
import { addNewCustomer } from "../Calls.js";
import Error from "../src/components/Error.jsx";
import { redirect } from "react-router-dom";

export async function action({ request }) {
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

  await addNewCustomer(customer);
  return redirect("/");
}

const FormNewCustomers = () => {
  const customer = useActionData();
  const errores = useActionData();

  return (
    <>
      {errores?.length &&
        errores.map((error, i) => <Error key={i}>{error}</Error>)}
      <Form method="post">
        <Formulario customer={customer} />
      </Form>
    </>
  );
};

export default FormNewCustomers;
