import React, { useEffect, useState } from 'react'
import styles from "./Consignment.module.css";
import airoplane from "../../imgs/airoplane.png"
import truck from "../../imgs/truck.png"
import car from "../../imgs/car.png"
import location from "../../imgs/location.png"
import { Button } from '@mui/material';

 
export default function Consignment({data}) {
  
   
    return (
        <div className={styles.container}>
          <p> ** Results are sorted by the shortest distance from origin and arrival, based on available trips and active users on the site.</p>

          { data.map((e,i)=>{
             return (   <div key={i} className={styles.consignments}>
              <div className={styles.imgDiv}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSR62OMOAa41rOjExkHnCL2oxexldHeARYg&usqp=CAU" alt="" />
                {/* <p>Name</p> */}
                
                 
                </div>
                <div className={styles.routeInfo}>
                  <div className={styles.locationDiv}>
                    <div className={styles.location}>
                       <div className={styles.logo}><img src="https://library.kissclipart.com/20180920/cfe/kissclipart-location-logo-green-clipart-green-logo-0f38de555911ac18.png" alt="" /></div>
                     <div className={styles.city}>{ e.from}</div>
                    </div>
                    <div className={styles.arrowDiv}>
                      <div className={styles.arrow}></div>
                     <div className={styles.arrowImage}>
                       {
                          e.preference==="Flight" ? <img src={airoplane} alt="" /> :
                           e.preference === "Bus" ? <img src="https://www.graphicsprings.com/filestorage/stencils/f794ad52bccba5259868672d8db49de5.png?width=500&height=500" alt="" /> :
                             e.preference === "Train" ? <img src="https://www.graphicsprings.com/filestorage/stencils/f794ad52bccba5259868672d8db49de5.png?width=500&height=500" alt="" /> :
                             e.preference==="Truck" ? <img src={truck} alt="" /> :
                             e.preference==="Car" && <img src={car} alt="" /> 

                      }
                       </div>
                    </div>
                    <div className={styles.location}>
                     <div className={styles.logo}><img src={location } alt="" /></div>
                      <div className={styles.city}>{ e.to}</div>  
                    </div>
                  </div>
                 <div className={styles.moreDetails}>
                   <span><strong>Departure date</strong> { e.date}</span>
                   <Button variant="outlined" size="small">  More Details </Button>
                 </div>
              </div>
            </div>
              
             )})
        }
        
        </div>
    )
}
