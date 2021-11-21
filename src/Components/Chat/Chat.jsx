import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import SendMessage from "./SendMessage";
import "./Chat.module.css";

export default function Chat() {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) =>
        setMessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div style={{ height: "80%" }}>
      <div
        style={{
          overflowY: "scroll",
          height: "100%",
          scrollbarWidth: "thin",
          scrollbarColor: "blue orange",
        }}
      >
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            style={
              uid && uid === auth.currentUser.uid
                ? {
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: "6px",
                  }
                : {
                    display: "flex",
                    flexDirection: "row",
                  }
            }
          >
            <img
              src={photoURL}
              alt=""
              width={25}
              height={25}
              style={{ borderRadius: "50%" }}
            />
            <p
              style={
                uid && uid === auth.currentUser.uid
                  ? {
                      border: "2px solid #1976D2",
                      background: "#1976D2",
                      padding: "5px",
                      color: "white",
                      margin: "20px 0px 0px 0px",
                      borderRadius: "15px 0px 15px 15px",
                    }
                  : {
                      border: "1px solid black",
                      padding: "5px",
                      color: "black",
                      margin: "20px 0px 0px 0px",
                      borderRadius: "0px 15px 15px 15px",
                    }
              }
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
