import * as React from "react";
import { useState, useEffect } from "react";
import Styles from "./Home.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Chat from "../Chat/Chat";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg from "./Carousel";
import { auth } from "../../firebase";

export default function BasicTextFields() {
  const [chat, setChat] = useState(false);

  const defaultData = {
    to: "",
    from: "",
    date: new Date(),
  };
  
  // console.log(Date.now());

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
      <div style={{ overflow: "hidden", maxHeight: "100vh" }}>
        <CarouselImg />
      </div>

      {/* //ChatApp .... */}
      {/* {console.log(auth)} */}
      {chat && auth.currentUser ? (
        <div
          style={{
            position: "absolute",
            maxWidth: "20%",
            top: "120px",
            padding: "10px",
            left: "78%",
            background: "white",
            zIndex: "99",
            borderRadius: "30px",
            paddingLeft: "12px",
          }}
        >
          <div className={Styles.chatApp}>
            <div style={{ display: "flex" }}>
              <h3 style={{ marginLeft: "25px" }}>Chat</h3>
              <h1 className={Styles.closeChat} onClick={() => setChat(!chat)}>
                +
              </h1>
            </div>
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
            border: "3px solid red",
            cursor: "pointer",
          }}
          onClick={() => {
            setChat(!chat);
            auth.currentUser === null &&
              alert("You must be logged in to access Chat section");
          }}
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
