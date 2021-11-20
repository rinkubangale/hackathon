import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import SendMessage from "./SendMessage";

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
    <div>
      <div style={{ overflowY: "scroll", maxHeight: "60vh" }}>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            className={id && uid === auth.currentUser.uid ? "sent" : "received"}
          >
            <img
              src={photoURL}
              alt=""
              width={25}
              height={25}
              style={{ borderRadius: "50%" }}
            />
            <p style={{ border: "2px solid" }}>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
