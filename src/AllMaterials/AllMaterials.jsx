import React, { Component } from 'react'
import AllMaterialsCard from '../Components/AllMaterialsCard'
import { firebaseApp } from '../firebase';

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
            myItem:false,
            objectValuesArray:[],

        }
    }
    selectedWorkplace=(e)=>{
         
        console.log(e.target.value)
        this.setState({...this.state, selectedWorkplace: e.target.value});
    }

    componentDidMount(){
        firebaseApp.database().ref().child("workmaterials").on("value", snapshot=>{
            if(snapshot.val()!=null){
                this.setState({...this.state, objectValuesArray: Object.values(snapshot.val()) }, ()=>{
                    console.log(this.state.objectValuesArray);
                })
            }
        })
        
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
            {this.state.objectValuesArray? <div>{this.state.objectValuesArray.map((currentSelectedObject)=>{
              if(currentSelectedObject.workplace===this.state.selectedWorkplace){
                  return  <AllMaterialsCard state={currentSelectedObject} check={this.state.myItem} />
              }
            })}</div>  : <div>Fetching Data..</div> } 
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