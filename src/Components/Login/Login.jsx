import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	overFlow: "scroll",
};

export default function BasicModal() {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [size, setSize] = React.useState("Small");

	const handleSelect = (event) => {
		setSize(event.target.value);
	};

	const handleAdd = (e) => {
		let { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handlePost = () => {
		console.log(data);
		axios
			.post("http://localhost:2345/login", {
				data,
			})
			.then((res) => {
				console.log(res.data);
				localStorage.setItem(
					"hack",
					JSON.stringify({ auth: true, token: res.data.token })
				);
				setOpen(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<Button onClick={handleOpen} color="inherit">
				Login
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h5" component="h2">
						Login
					</Typography>
					<div style={{ display: "flex" }}>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2 }}
							style={{ margin: "30px 20px 0px 0px" }}
						>
							Email
						</Typography>
						<TextField
							required
							id="outlined-required"
							value={data.email}
							name="email"
							placeholder="Enter email"
							style={{ margin: "20px 0px 10px 0px" }}
							onChange={handleAdd}
						/>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2 }}
							style={{ margin: "30px 0px 0px 40px" }}
						>
							Password
						</Typography>
						<TextField
							required
							id="outlined-required"
							type="password"
							value={data.password}
							name="password"
							placeholder="Enter your password"
							style={{ margin: "20px 0px 10px 10px" }}
							onChange={handleAdd}
						/>
					</div>
					<br />
					<Button variant="contained" onClick={handlePost}>
						Login
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
