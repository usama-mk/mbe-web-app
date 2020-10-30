import { Button, Card } from '@material-ui/core'
import React from 'react'
import { firebaseApp } from '../firebase';


export default function MyHoursCard(props) {
    console.log(props.check.myItem);
    const deleteItem = (id)=>{
        // delete item from firebasae
        let userRef = firebaseApp.database().ref('hoursworked/' + id);
        userRef.remove();
        console.log("item deleted")
    }
    return (
        <div>   
            <Card style={{padding:"15px", marginTop:"15px",  wordWrap:"break-word" }}>
                <h2> <span style={{color:"#3f51b5"}}>  workLocationName: </span> {props.state.workLocationName}</h2>
                <h2><span style={{color:"#3f51b5"}}>  userEmail: </span> {props.state.user_Email} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Employee: </span> {props.state.employ} </h2>
                <h2><span style={{color:"#3f51b5"}}>  date: </span>{props.state.date} </h2>
                <h2><span style={{color:"#3f51b5"}}>  description: </span> {props.state.description} </h2>
                <h2><span style={{color:"#3f51b5"}}>  KM Driven: </span> {props.state.kmdriven} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Number of Hours: </span> {props.state.hoursworked} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Parking Cost: </span> {props.state.parkingCost} </h2>

                {props.check && <Button style={buttonStyles} onClick={()=>{deleteItem(props.state.worklocationID)}}>Delete</Button>}
            </Card>
        </div>
    )
}

const buttonStyles={
    backgroundColor:"red",
    color: "white",
    fontWeight:"bold"
}
