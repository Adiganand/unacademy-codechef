import React from "react";
import Image from "../image/image";
import Heart from "../assets/heart";
import Delete from "../assets/delete";
import Edit from "../assets/edit";
import Mail from "../assets/mail";
import Telephone from "../assets/telephone";
import Website from "../assets/website";
import HeartFill from "../assets/heartFill";
import EditForm from "../editForm/editForm";

const User = ({
  id,
  username,
  email,
  phone,
  website,
  likeContact,
  liked,
  editFields,
  deleteContact,
}) => {
  const renderUser = () => {
    return (
      <div
        className='card d-flex align-items-center'
        style={{ width: "20rem", height: "30rem", margin: "1rem" }}
      >
        <Image
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
          alt={username}
          style={{ width: "16rem", height: "16rem" }}
        />
        <div className='card-body'>
          <div className='container'>
            <h3 className='card-title'>{username}</h3>
          </div>
          <div className='container'>
            <div className='row my-2'>
              <span className='col-1'>
                <Mail />
              </span>
              <span className='col-auto'>{email}</span>
            </div>
            <div className='row my-2'>
              <span className='col-1'>
                <Telephone />
              </span>
              <span className='col-auto'>{phone}</span>
            </div>
            <div className='row my-1 d-flex align-items-end'>
              <div className='col-1'>
                <Website />
              </div>
              <div className='col-auto'>{website}</div>
            </div>
          </div>
        </div>
        <div className='card-body container-fluid border-top bg-light'>
          <div className='row d-flex justify-content-around'>
            <div className='col-auto'>
              <button
                onClick={() => likeContact(id)}
                style={{ background: "none", border: "none" }}
              >
                {liked ? <HeartFill /> : <Heart />}
              </button>
            </div>
            <div className='col-auto'>
              <button
                style={{ background: "none", border: "none" }}
                data-bs-toggle='modal'
                data-bs-target={`#modal-${id}`}
              >
                <Edit />
              </button>
              <EditForm id={id} editFields={editFields} />
            </div>
            <div className='col-auto'>
              <button
                style={{ background: "none", border: "none" }}
                onClick={() => deleteContact(id)}
              >
                <Delete />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <React.Fragment>{renderUser()}</React.Fragment>;
};

export default User;
