import React, { Component } from 'react'
import AllMaterialsCard from '../Components/AllMaterialsCard'

export default class AllMaterials extends Component {
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
            myItem:"",

        }
    }
    selectedWorkplace=(e)=>{
         
        console.log(e.target.value)
        this.setState({...this.state, selectedWorkplace: e.target.value});
    }
    render() {
        return (
            <div style={styles} >
                <h1>All Materials</h1>
                 <div>
               <span>Select workplace </span>
           <select style={{margin:"10px", padding:"5px"}} id="workplace" name="workplace" onChange={this.selectedWorkplace} value={this.state.selectedWorkplace} >
              {this.state.workplaceItems.map((workplaceItem)=>{   
               return  ( <option value={workplaceItem} >{workplaceItem}</option>); 
              })}
            </select>
    
  </div>
             <AllMaterialsCard  state= {this.state}  />   
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