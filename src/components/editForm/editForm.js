import React, { useState } from "react";
import "./editForm.css";

const EditForm = ({ id, editFields }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <div
      className='modal fade show'
      id={`modal-${id}`}
      tabIndex='-1'
      aria-labelledby={`modalLabel-${id}`}
      aria-hidden='true'
      role='dialog'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={`modalLabel-${id}`}>
              Basic Modal
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form
              onSubmit={() => {
                if (name && email && phone && website) {
                  editFields(id, name, email, phone, website);
                }
              }}
            >
              <div className='d-flex m-2 form-group required'>
                <label htmlFor={`name-${id}`} className='form-label col-2'>
                  Name
                </label>
                <input
                  className='form-control'
                  id={`name-${id}`}
                  type='text'
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                  required
                />
              </div>
              <div className='d-flex m-2 form-group required'>
                <label htmlFor={`email-${id}`} className='form-label col-2'>
                  E-mail
                </label>
                <input
                  className='form-control'
                  id={`email-${id}`}
                  type='email'
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  required
                />
              </div>
              <div className='d-flex m-2 form-group required'>
                <label htmlFor={`phone-${id}`} className='form-label col-2'>
                  Phone
                </label>
                <input
                  className='form-control'
                  id={`phone-${id}`}
                  type='text'
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  value={phone}
                  required
                />
              </div>
              <div className='d-flex m-2 form-group required'>
                <label htmlFor={`website-${id}`} className='form-label col-2'>
                  Website
                </label>
                <input
                  className='form-control'
                  id={`website-${id}`}
                  type='text'
                  onChange={(event) => {
                    setWebsite(event.target.value);
                  }}
                  value={website}
                  required
                />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={() => {
                if (name && email && phone && website) {
                  editFields(id, name, email, phone, website);
                }
              }}
              className='btn btn-primary'
              data-bs-dismiss='modal'
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
