import * as React from "react";
import { useState, useEffect } from "react";
import Styles from "./Home.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg from "./Carousel";
import { auth } from "../../firebase";

export default function BasicTextFields() {
  const defaultData = {
    to: "",
    from: "",
    date: new Date(""),
  };

  const [data, setData] = useState(defaultData);

  const handleDate = (e) => {
    setData({ ...data, date: e });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Box
        className={Styles.homeBox}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="From where?"
          variant="outlined"
          name="from"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="To where?"
          variant="outlined"
          name="to"
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="When ?"
            inputFormat="dd/MM/yyyy"
            value={data.date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          size="large"
          color="error"
          onClick={() => console.log(data)}
        >
          Search
        </Button>
      </Box>

      {/* //HomePage Carousel .... */}
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <CarouselImg />
      </div>
    </>
  );
}
