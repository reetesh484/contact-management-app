import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../features/contact/contactSlice";
import { v4 } from "uuid";
import { addContact } from "../features/contact/contactSlice";
import { useNavigate } from "react-router-dom";
const NewContact = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    active: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    const newContact: Contact = {
      id: v4(),
      ...contact,
    };
    if (contact.firstName && contact.lastName) {
      console.log("new", newContact);
      dispatch(addContact(newContact));
    }

    setContact({
      firstName: "",
      lastName: "",
      active: false,
    });

    alert("New Contact Added");
  };
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-2xl font-extrabold text-center my-4">
        Create Contact
      </h1>
      <div className="border border-yellow-600 px-6 py-4 w-[100%] h-[100%]">
        <div className="mb-4">
          <label htmlFor="firstname">First Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstname"
            name="firstname"
            value={contact.firstName}
            onChange={(e) =>
              setContact({ ...contact, firstName: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            name="lastname"
            value={contact.lastName}
            onChange={(e) =>
              setContact({ ...contact, lastName: e.target.value })
            }
          />
        </div>

        <div className="mb-6 flex gap-6 items-center">
          <label htmlFor="status">Status</label>
          <div id="status" className="">
            <div className="mb-2 flex">
              <input
                type="radio"
                className="mx-2 border-0 w-6 h-6"
                id="active"
                name="status"
                value="active"
                onClick={(e) => setContact({ ...contact, active: true })}
              />
              <label htmlFor="active" className="hover:cursor-pointer">
                Active
              </label>
            </div>
            <div className="mb-2 flex">
              <input
                type="radio"
                className="mx-2 border-0 w-6 h-6"
                id="inactive"
                name="status"
                value="inactive"
                onClick={(e) => setContact({ ...contact, active: false })}
              />
              <label htmlFor="inactive" className="hover:cursor-pointer">
                Inactive
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 w-full border-none shadow-md shadow-gray-600 active:bg-green-400 active:shadow-none  round-md bg-green-500"
      >
        Save Contact
      </button>
    </div>
  );
};

export default NewContact;
