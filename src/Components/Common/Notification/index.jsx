import React from "react";
import { useNotificationContext } from "./context";
import "./style.css";

export const Notification = ({ toast }) => {
  const { notify } = useNotificationContext();
  const closeNotification = (id) => {
    notify({
      type: "CLOSE",
      payload: {
        id: id,
      },
    });
  };

  return (
    <>
      {toast.length ? (
        <div className="notification-container container-scroll">
          {toast.map((item) => (
            <div key={item.id} className="each-notification">
              <div>
                <div className="flex justify-space-between">
                  <div>{item.title}</div>
                  <button onClick={() => closeNotification(item.id)}>X</button>
                </div>
                <br />
                <div>{item.message}</div>
                <div>Id: {item.id}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Notification;
