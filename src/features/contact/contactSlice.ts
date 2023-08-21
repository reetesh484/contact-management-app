import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  active: boolean;
}

const initialState: Array<Contact> = [];

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const updatedContact = state.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
      // console.log("updatedcontact:", updatedContact);
      return updatedContact;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
