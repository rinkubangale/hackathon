import { Input, Button } from "@mui/material";
import React, { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../../firebase";

export default function SendMessage() {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL: photoURL,
      uid: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMsg("");
  }
  return (
    <div style={{ position: "absolute", bottom: "0", margin: "0px 12px" }}>
      <form onSubmit={sendMessage}>
        <Input
          value={msg}
          placeholder="Messages..."
          onChange={(e) => setMsg(e.target.value)}
        />

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
