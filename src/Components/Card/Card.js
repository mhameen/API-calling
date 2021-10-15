import React from "react"
import styles from "./Card.module.css"


const Card = (props) => {
    return(
       <div className={styles.design} >
         <div  >
            <div className={styles.border} >
                <div className={styles.text} > 
                    <img className={styles.image} src={props.image}  />
                    <p> Name: {props.name}</p>
                    <p> DOB: {props.dob}</p>
                    <p> NickName: {props.nickname}</p>
                    <p> Status: {props.status}</p>
                </div>
            </div>
         </div>
       </div> 
    )
}

export default Card ;