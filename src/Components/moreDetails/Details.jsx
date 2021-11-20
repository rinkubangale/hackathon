import React,{useParams} from "react";
import style from "./Details.module.css";
import {Grid} from "@material-ui/core";
import axios from 'axios';


const data={
    name:"pratik saha",
    from:"delhi",
    to:"kolkata",
    date:"24th nov 2021",
    size:"small",
    details:"it is a fragile object have ship with care",
    preference:"flight"
}


const Details=()=>{
     
    const {id}=useParams()
    console.log(id)

    return(
        <div className={style.main}>
            <div className={style.container}>
              <div className={style.content}>
                  <div className={style.content_header}>
                      <div className={style.content_header_logo}>
                          <div >
                              <p className={style.content_header_logo_1}>
                                  <img className={style.content_header_logo_2} src="https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Delivery-Logo-Graphics-1-10.jpg" alt="logo" />
                              </p>
                          </div>
                      </div>
                      <div className={style.content_header_content}>
                          <h1 className={style.content_header_content_main}>Deliver consignment from {data.from} to {data.to}</h1>
                          <div className={style.content_header_content_sub}>
                              <div>
                                  <strong>Trip posted on</strong> {data.date}
                                  <br />
                                  <strong>by</strong> {data.name}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <Grid item conteiner lg={6} style={{textAlign:"center",margin:"auto"}} ><h1>Consignment Details</h1></Grid>
            <div className={style.content_main}>
                <div className={style.content_main_1}>
                    <ul className={style.list_table}>
                        <li  className={style.list_table_header}><strong>Logistics</strong></li>
                        <li><strong>size :</strong> {data.size}</li>
                        <li ><strong>Preference :</strong> {data.preference}</li>
                    </ul>
                </div>
                <div className={style.content_main_1}>
                    <ul className={style.list_table}>
                        <li  className={style.list_table_header}><strong>Expected delivary & detail</strong></li>
                        <li ><strong>Date :</strong> {data.date}</li>
                        <li><strong>Details :</strong> {data.details}</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Details