import { Button, Card } from '@material-ui/core'
import React from 'react'
import { firebaseApp } from '../firebase';

export default function AllMaterialsCard(props) {
     
    const deleteItem = (id)=>{
        // delete item from firebasae
        let userRef = firebaseApp.database().ref('workmaterials/' + id);
        userRef.remove();
        console.log("item deleted")
    }
    return (
        <div>   
            <Card style={{padding:"15px", marginTop:"15px" , wordWrap:"break-word" }}>
                <h2> <span style={{color:"#3f51b5"}}>  WorkLocationName: </span> {props.state.workLocationName}</h2>
                <h2><span style={{color:"#3f51b5"}}>  User_Email: </span> {props.state.user_Email} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Date: </span>{props.state.date} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Category: </span> {props.state.category} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Materials: </span>{props.state.materials} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Amount: </span> {props.state.Amount} </h2>
                {/* <h2><span style={{color:"#3f51b5"}}>  Remarks: </span> {props.state.remarks} </h2> */}
                {/* <h2><span style={{color:"#3f51b5"}}>  Selected workplace from dropdown </span> {props.state.workplace} </h2> */}
                {props.check&&<Button style={buttonStyles} onClick={()=>{deleteItem(props.state.worklocationID)}}>Delete</Button>}
            </Card>
        </div>
    )
}

const buttonStyles={
    backgroundColor:"red",
    color: "white",
    fontWeight:"bold"
}
