import React from "react";
import { Contact } from "../features/contact/contactSlice.ts";
import { FiCheckCircle } from "react-icons/fi";
import { LuXCircle } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact/contactSlice.ts";
import { useNavigate } from "react-router-dom";

const ContactCard = (contact: Contact) => {
  //   console.log(contact);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-60 h-40 border border-gray-500 flex justify-center flex-col items-center gap-2 ">
      <h3 className="text-lg font-semibold">
        {contact.firstName} {contact.lastName}
      </h3>
      <span className="text-lg">
        {contact.active ? (
          <span className="flex gap-2 items-center text-green-600">
            <FiCheckCircle />
            <span>Active</span>
          </span>
        ) : (
          <span className="flex gap-2 items-center text-red-500">
            <LuXCircle /> <span>Inactive</span>
          </span>
        )}
      </span>
      <div className="buttons flex gap-2">
        <button
          className="px-4 py-2 bg-yellow-600"
          onClick={() => navigate(`/contacts/${contact.id}`)}
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteContact(contact.id))}
          className="px-4 py-2 bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
