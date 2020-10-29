import { Button, Card } from '@material-ui/core'
import React from 'react'

export default function MyHoursCard(props) {
    const deleteItem = (id)=>{
        // delete item from firebasae
        console.log("item deleted")
    }
    return (
        <div>   
            <Card style={{padding:"15px",  wordWrap:"break-word" }}>
                <h2> <span style={{color:"#3f51b5"}}>  workLocationName: </span> {props.state.workLocationName}</h2>
                <h2><span style={{color:"#3f51b5"}}>  userEmail: </span> {props.state.userEmail} </h2>
                <h2><span style={{color:"#3f51b5"}}>  date: </span>{props.state.date} </h2>
                <h2><span style={{color:"#3f51b5"}}>  description: </span> {props.state.description} </h2>
                <h2><span style={{color:"#3f51b5"}}>  KM Driven </span> {props.state.kmDriven} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Number of Hours </span> {props.state.numberOfHours} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Parking Cost </span> {props.state.parkingCost} </h2>

                {props.state.myItem&&<Button style={buttonStyles} onClick={()=>{deleteItem(props.state.id)}}>Delete</Button>}
            </Card>
        </div>
    )
}

const buttonStyles={
    backgroundColor:"red",
    color: "white",
    fontWeight:"bold"
}
