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
		from: "",
		to: "",
		date: "",
		size: "",
		details: "",
		preference: "",
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
			.post(
				"http://localhost:2345/post/create",
				{
					data,
				},
				{
					headers: {
						Authorization:
							"Bearer " +
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTg5MTIwZWY5NGI4NDA3M2NjY2I3YSIsImlhdCI6MTYzNzM4ODYwNX0.1N-ia17_zWVx7e9AcgF6HDbn4nDossQIsCRUCJ1QxE0",
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				setOpen(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h5" component="h2">
						Post Consiment Details
					</Typography>
					<div style={{ display: "flex" }}>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2 }}
							style={{ margin: "30px 20px 0px 0px" }}
						>
							From*
						</Typography>
						<TextField
							required
							id="outlined-required"
							value={data.from}
							name="from"
							placeholder="Enter pickup city name"
							style={{ margin: "20px 0px 10px 0px" }}
							onChange={handleAdd}
						/>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2 }}
							style={{ margin: "30px 0px 0px 60px" }}
						>
							To*
						</Typography>
						<TextField
							required
							id="outlined-required"
							value={data.to}
							name="to"
							placeholder="Enter dropup city name"
							style={{ margin: "20px 0px 10px 10px" }}
							onChange={handleAdd}
						/>
					</div>
					<Typography
						style={{ margin: "20px 0px 10px 0px" }}
						id="modal-modal-description"
						sx={{ mt: 2 }}
					>
						Date of Shipment
					</Typography>

					<TextField
						label=""
						type="date"
						value={data.date}
						name="date"
						onChange={handleAdd}
					/>

					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Size of Parcel
					</Typography>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={data.size}
						name="size"
						label="Age"
						placeholder=""
						style={{ margin: "10px 0px 0px 0px", width: "100px" }}
						onChange={handleAdd}
					>
						<MenuItem value={"Small"}>Small</MenuItem>
						<MenuItem value={"Medium"}>Medium</MenuItem>
						<MenuItem value={"Large"}>Large</MenuItem>
					</Select>
					<p>
						Small = keys / Medium = phone, book, bag / Large = big box,
						instrument / Extra large = vehicle, pallet
					</p>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Parcel details
					</Typography>
					<TextField
						required
						id="outlined-required"
						value={data.details}
						name="details"
						placeholder="Enter details"
						style={{ margin: "10px 0px 0px 0px", width: "500px" }}
						onChange={handleAdd}
					/>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Transport mode/ vehicle preference
					</Typography>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={data.preference}
						name="preference"
						label="Preference"
						placeholder=""
						style={{ margin: "10px 0px 0px 0px", width: "150px" }}
						onChange={handleAdd}
					>
						<MenuItem value={"Car"}>Car</MenuItem>
						<MenuItem value={"Bus"}>Bus</MenuItem>
						<MenuItem value={"Train"}>Train</MenuItem>
						<MenuItem value={"Flight"}>Flight</MenuItem>
						<MenuItem value={"Truck"}>Truck</MenuItem>
					</Select>
					<br />
					<Button variant="contained" onClick={handlePost}>
						Post
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
