import React, { createContext, useReducer, useContext } from "react";
import { createPortal } from "react-dom";
import { Notification } from ".";

export const NotificationContext = createContext();

const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          message: action.payload.message,
        },
      ];
    case "CLOSE":
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [notification, notify] = useReducer(reducer, initialState);
  const toastData = { notification, notify };
  return (
    <NotificationContext.Provider value={toastData}>
      {children}

      {createPortal(<Notification toast={notification} />, document.body)}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};
