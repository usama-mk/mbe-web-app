import React, { Component } from 'react'
import AllMaterialsCard from '../Components/AllMaterialsCard';

export default class MyMaterials extends Component {
    constructor(){
        super();
        this.state={
            workplaceItems: ["Select optionkies locatie", "HK 25", "Zonnestraal school gebouw", "Project 166", "VR-Trade B.V." ],
            workLocationName:"Isori",
            userEmail:"mk@gmail.com",
            date:"28/10/2020",
            category:"IT",
            materials:"Camera",
            amount:"750",
            remarks:"Great Product",
            selectedWorkplace:"",
            id:"",
            myItem:true
        }
    }
    render() {
        return (
            <div>
                {/* display materials with Current user email and delete button  */}
                <div style={styles} >
                <h1>My Materials</h1>
                 
             <AllMaterialsCard  state= {this.state}  />   
            </div>
            </div>
        )
    }
}
const styles={
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
