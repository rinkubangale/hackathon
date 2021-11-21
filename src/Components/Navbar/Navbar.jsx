import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { auth, signInWithGoogle } from "../../firebase";
import Styles from "./Navbar.module.css";
import Post from "../PostConsiment/Post";

export default function Navbar() {
	const [user, setUser] = React.useState(null);
	const [token, setToken] = useState("");
	const [authl, setAuthl] = useState(false);

	React.useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				console.log(user.displayName, user.email);
				if (authl == false || token == "") {
					axios
						.post("http://localhost:2345/register", {
							email: user.email,
							Name: user.displayName,
							password: user.email,
						})
						.then((res) => {
							console.log(res.data);
							axios
								.post("http://localhost:2345/login", {
									email: user.email,
									password: user.email,
								})
								.then((res) => {
									console.log(res.data);
									localStorage.setItem(
										"hack",
										JSON.stringify({ auth: true, token: res.data.token })
									);
									setToken(res.data.token);
									setAuthl(true);
								})
								.catch((err) => {
									console.log(err);
								});
						})
						.catch((err) => {
							console.log(err);
						});
				}
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
