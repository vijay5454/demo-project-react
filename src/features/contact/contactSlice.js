import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
  telephone: "",
};

const contactSlice = createSlice({
  name: "contact-details",
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload;
    },
    changePhone: (state, { payload }) => {
      state.phoneNumber = payload;
    },
    changeEmail: (state, { payload }) => {
      state.email = payload;
    },
    changeTelephone: (state, { payload }) => {
      state.telephone = payload;
    },
    checkForm: (state) => {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const phoneRegex = /^\d{10}$/;
      if (!state.email.match(validRegex)) {
        state.email = "";
        alert("Enter valid email");
      }
      if (
        !(
          state.phoneNumber.match(phoneRegex) && state.phoneNumber.length === 10
        )
      ) {
        state.phoneNumber = "";
        alert("Enter valid phone number");
      }
      if (
        !(state.telephone.match(phoneRegex) && state.telephone.length === 10)
      ) {
        state.telephone = "";
        alert("Enter valid Telephone number");
      }
    },
  },
});

export const {
  changeName,
  changePhone,
  changeEmail,
  changeTelephone,
  checkForm,
} = contactSlice.actions;

export default contactSlice.reducer;
