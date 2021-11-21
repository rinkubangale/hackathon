import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Chat from "../Chat/Chat";
import Styles from "../Home/Home.module.css";
import { auth } from "../../firebase";

const data1 = {
  name: "",
  from: "",
  to: "",
  date: "",
  size: "",
  details: "",
  preference: "",
};

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(data1);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:2345/post/id", {
        id: id,
      })
      .then((res) => {
        console.log(res.data.post);
        setData(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.content_header}>
              <div className={style.content_header_logo}>
                <div>
                  <p className={style.content_header_logo_1}>
                    <img
                      className={style.content_header_logo_2}
                      src="https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Delivery-Logo-Graphics-1-10.jpg"
                      alt="logo"
                    />
                  </p>
                </div>
              </div>
              <div className={style.content_header_content}>
                <h1 className={style.content_header_content_main}>
                  Deliver consignment from {data.from} to {data.to}
                </h1>
                <div className={style.content_header_content_sub}>
                  <div>
                    <strong>Trip posted on</strong> {data.createdAt}
                    <br />
                    {/* <strong>by</strong> {data.user_id["Name"]} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid
          item
          conteiner
          lg={6}
          style={{ textAlign: "center", margin: "auto" }}
        >
          <h1>Consignment Details</h1>
        </Grid>
        <div className={style.content_main}>
          <div className={style.content_main_1}>
            <ul className={style.list_table}>
              <li className={style.list_table_header}>
                <strong>Logistics</strong>
              </li>
              <li>
                <strong>size :</strong> {data.size}
              </li>
              <li>
                <strong>Preference :</strong> {data.preference}
              </li>
            </ul>
          </div>
          <div className={style.content_main_1}>
            <ul className={style.list_table}>
              <li className={style.list_table_header}>
                <strong>Expected delivary & detail</strong>
              </li>
              <li>
                <strong>Date :</strong> {data.date}
              </li>
              <li>
                <strong>Details :</strong> {data.details}
              </li>
            </ul>
          </div>
        </div>
      </div>
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
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            top: "80vh",
            left: "90%",
            background: "transparent",
            border: "4px double #1976D2",
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
            src="https://th.bing.com/th/id/OIP.utANnR_yzqzbf8wKFvnnCAHaHa?pid=ImgDet&rs=1"
            alt="Bot"
          />
        </div>
      )}
    </>
  );
};

export default Details;
