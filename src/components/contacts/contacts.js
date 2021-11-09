import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "../user/user";

const Contacts = () => {
  const localList = localStorage.getItem("contactList");
  const [contactList, setContactList] = useState(JSON.parse(localList) || []);
  const fetchContactList = async () => {
    if (contactList.length === 0) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setContactList(
        response.data.map((ele) => {
          return { ...ele, liked: false };
        }),
      );
      localStorage.setItem("contactList", JSON.stringify(contactList));
    }
  };
  useEffect(() => {
    fetchContactList();
  }, []);

  const likeContact = (id) => {
    const newList = [
      ...contactList.map((ele) => {
        if (ele.id === id) {
          return { ...ele, liked: !ele.liked };
        }
        return ele;
      }),
    ];
    setContactList(newList);
    localStorage.setItem("contactList", JSON.stringify(newList));
  };
  const editFields = (id, name, email, phone, website) => {
    const newList = [
      ...contactList.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            username: name,
            email: email,
            phone: phone,
            website: website,
          };
        }
        return ele;
      }),
    ];
    setContactList(newList);
    localStorage.setItem("contactList", JSON.stringify(newList));
  };
  const deleteContact = (id) => {
    const newList = [...contactList.filter((ele) => ele.id !== id)];
    setContactList(newList);
    localStorage.setItem("contactList", JSON.stringify(newList));
  };
  return (
    <div className='d-flex flex-md-row flex-column align-items-center flex-wrap'>
      {contactList.map((ele) => (
        <User
          key={ele.id}
          id={ele.id}
          phone={ele.phone}
          website={ele.website}
          email={ele.email}
          username={ele.username}
          likeContact={likeContact}
          liked={ele.liked}
          editFields={editFields}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default Contacts;
