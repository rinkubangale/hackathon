import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { auth, signInWithGoogle } from "../../firebase";
import Styles from "./Navbar.module.css";
import Post from "../PostConsiment/Post";
import Login from "../Login/Login";
import { useHistory } from "react-router";

export default function Navbar() {
	const [user, setUser] = React.useState(null);
	const history = useHistory();
	React.useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				console.log(user.displayName, user.email);
			}
			setUser(user);
		});
	}, [user]);

	const signOut = () => {
		auth.signOut().then(() => {
			setUser(null);
			alert("You have been signed out");
		});
	};

	const handleSearch = () => {
		history.push("/serachConsiment");
	};
	return (
		<div className={Styles.divNav}>
			<div>logo</div>
			<div>
				<Post>Make a Post</Post>
				<Login>Make a Login</Login>
				<Button onClick={handleSearch}>Search of Consiment</Button>
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
