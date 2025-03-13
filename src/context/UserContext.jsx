// Created by Randylon Torda
// Date January 14, 2025
//Lab -1

import { useContext, useReducer } from "react";
import { createContext } from "react";

const UserContext = createContext();

const initialState = {
  username: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.payload.name]: action.payload.value };
  }
}
function UserContextProvider({ children }) {
  const [{ username, password }, dispatch] = useReducer(reducer, initialState);

  function updateField(e) {
    dispatch({
      type: "updateField",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  return (
    <UserContext.Provider value={{ username, password, updateField }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Provider is undefined");
  }
  return context;
}

export { UserContextProvider, useUserContext };
