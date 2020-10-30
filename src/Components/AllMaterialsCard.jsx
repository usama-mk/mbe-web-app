import { Button, Card } from '@material-ui/core'
import React from 'react'

export default function AllMaterialsCard(props) {
    const deleteItem = (id)=>{
        // delete item from firebasae
        console.log("item deleted")
    }
    return (
        <div>   
            <Card style={{padding:"15px",  wordWrap:"break-word" }}>
                <h2> <span style={{color:"#3f51b5"}}>  workLocationName: </span> {props.state.workplace}</h2>
                <h2><span style={{color:"#3f51b5"}}>  userEmail: </span> {props.state.user_Email} </h2>
                <h2><span style={{color:"#3f51b5"}}>  date: </span>{props.state.date} </h2>
                <h2><span style={{color:"#3f51b5"}}>  category: </span> {props.state.category} </h2>
                <h2><span style={{color:"#3f51b5"}}>  materials: </span>{props.state.materials} </h2>
                <h2><span style={{color:"#3f51b5"}}>  amount: </span> {props.state.Amount} </h2>
                <h2><span style={{color:"#3f51b5"}}>  remarks: </span> {props.state.remarks} </h2>
                <h2><span style={{color:"#3f51b5"}}>  Selected workplace from dropdown </span> {props.state.workplace} </h2>
                {props.state.myItem&&<Button style={buttonStyles} onClick={()=>{deleteItem(this.props.state.id)}}>Delete</Button>}
            </Card>
        </div>
    )
}

const buttonStyles={
    backgroundColor:"red",
    color: "white",
    fontWeight:"bold"
}
