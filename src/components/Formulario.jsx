import Error from "./Error";
import { useNavigate } from "react-router-dom";

const Formulario = ({ editedCustomer }) => {
  return (
    <>
      <div className="form">
        <div className="input-container">
          <label htmlFor="">Name</label>
          <input
            defaultValue={editedCustomer?.name}
            id="name"
            name="name"
            type="text"
            placeholder="Write your first and last name."
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Company</label>
          <input
            defaultValue={editedCustomer?.company}
            id="company"
            name="company"
            type="text"
            placeholder="Company name."
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Email</label>
          <input
            defaultValue={editedCustomer?.email}
            id="email"
            name="email"
            type="text"
            placeholder="Email address."
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Phone Number</label>
          <input
            defaultValue={editedCustomer?.telephone}
            id="telephone"
            name="telephone"
            type="text"
            placeholder="Customer's phone number."
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Notes</label>
          <textarea
            defaultValue={editedCustomer?.notes}
            id="notes"
            name="notes"
            type="text"
            placeholder="Customer's Notes"
          />
          <button className="register-btn">
            {editedCustomer ? "Save changes" : "Register new client"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Formulario;
