import * as React from "react";
import { useState } from "react";
import Styles from "./Home.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import img1 from "../../imgs/img1.jpg";
import img2 from "../../imgs/img2.jpg";
import img3 from "../../imgs/img3.jpg";
import img4 from "../../imgs/img4.jpg";
import Chat from "../Chat/Chat";

const imgArr = [img1, img2, img3, img4];

export default function BasicTextFields() {
  const [chat, setChat] = useState(false);

  const defaultData = {
    to: "",
    from: "",
    date: new Date("2021-11-20"),
  };

  const [data, setData] = React.useState(defaultData);

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
        {/* {
        imgArr.map((e, i)=>{
          return <img key={i} src={e} alt="icon" />
        })
      } */}
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

      <div className={Styles.bgslider}>
        <figure>
          <img src={img1} alt="Slider" />
          <img src={img2} alt="Slider" />
          <img src={img3} alt="Slider" />
          <img src={img4} alt="Slider" />
        </figure>
      </div>
      {chat ? (
        <div
          style={{
            position: "absolute",
            maxWidth: "20%",
            top: "120px",
            padding: "10px",
            left: "78%",
            background: "white",
            zIndex:"99"
          }}
        >
          <div className={Styles.chatApp}>
            <h1 className={Styles.closeChat} onClick={() => setChat(!chat)}>
              +
            </h1>
            <Chat className={Styles.chatApp} />
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            top: "80vh",
            left: "90%",
            background: "transparent",
            border: "7px solid red",
            cursor: "pointer",
          }}
          onClick={() => setChat(!chat)}
        >
          <img
            className={Styles.imgBot}
            src="https://www.pikpng.com/pngl/m/70-703241_1024-x-1024-11-cartoon-robot-face-clipart.png"
            alt="Bot"
          />
        </div>
      )}
    </>
  );
}
