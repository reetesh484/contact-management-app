import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import type { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../components/ContactCard";

const Contacts = () => {
  const contact = useSelector((state: RootState) => state.contact);
  const dispatch = useDispatch();

  console.log(contact);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <Link
        className="text-white px-4 py-2 my-4 bg-yellow-600"
        to="/newcontact"
      >
        Create Contact
      </Link>
      {contact?.length < 1 ? (
        <div className="info flex  justify-center items-center gap-4 py-4 px-4 text-xl font-semibold border border-yellow-600">
          <span className="p-4 rounded-full text-white bg-red-500">
            <ImCross />{" "}
          </span>
          <p className="">
            {" "}
            No contact found. Please add contact from Create Contact Button
          </p>
        </div>
      ) : (
        <div className="flex gap-2 justify-center flex-wrap">
          {contact.map((ele) => {
            return (
              <li className="list-none" key={ele.id}>
                <ContactCard {...ele} />
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Contacts;
