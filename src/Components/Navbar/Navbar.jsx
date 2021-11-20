import { Button } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { auth, signInWithGoogle } from "../../firebase";
import Styles from "./Navbar.module.css";
import Post from "../PostConsiment/Post";

export default function Navbar() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setUser(user);
    });
  }, [user]);

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      alert("You have been signed out");
    });
  };

  return (
    <div className={Styles.divNav}>
      <div>logo</div>
      <div>
        <Post>Make a Post</Post>
      </div>
      <div>
        {user === null ? (
          <Button variant="outlined" onClick={signInWithGoogle}>
            Sign In
          </Button>
        ) : (
          <Avatar
            src={user.photoURL}
            onClick={signOut}
            style={{ cursor: "pointer" }}
          ></Avatar>
        )}
        <Button>About</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
}
