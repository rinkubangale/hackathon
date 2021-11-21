import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Consignment from "./Consignment";
import axios from "axios";

export default function Search() {
	const initailState = {
		from: "",
		to: "",
		departure: "",
	};
	const [search, setSearch] = useState(initailState);
	const [data, setData] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSearch({ ...search, [name]: value });
	};

	const handleClick = () => {
		console.log("from", search);

		axios
			.post("http://localhost:2345/post/search", {
				search,
			})
			.then((res) => {
				console.log("res.data", res.data);
				setData(res.data.post);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:2345/post", {
	// 			from: "Kolkata",
	// 			to: "Mumbai",
	// 		})
	// 		.then((res) => {
	// 			setData(res.data.post);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<>
			<div className={styles.container}>
				<h2>Search for a Consignment</h2>
				<br />
				<div className={styles.searchDiv}>
					<div className={styles.flexDiv}>
						{" "}
						<input
							onChange={handleChange}
							type="text"
							name="from"
							autocomplete="off"
							placeholder="From"
						/>
					</div>
					<div className={styles.flexDiv}>
						{" "}
						<input
							onChange={handleChange}
							type="text"
							name="to"
							autocomplete="off"
							placeholder="To"
						/>
					</div>
					<div className={styles.flexDiv}>
						<Stack component="form" noValidate spacing={3}>
							<TextField
								id="date"
								label="Departure"
								onChange={handleChange}
								name="departure"
								type="date"
								sx={{ width: 220 }}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Stack>
					</div>
					<div className={styles.flexDiv}>
						<Button
							onClick={handleClick}
							fullWidth="true"
							variant="outlined"
							size="large"
						>
							{" "}
							Search{" "}
						</Button>
					</div>
				</div>
			</div>
			<Consignment data={data} />
		</>
	);
}
