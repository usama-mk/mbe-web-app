import React, { Component } from 'react'
import AllMaterialsCard from '../Components/AllMaterialsCard';
import { firebaseApp } from '../firebase';

export default class MyMaterials extends Component {
    constructor(props){
        super(props);
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
            myItem: true,
            objectValuesArray:[],
        }
    }

    componentDidMount(){
        firebaseApp.database().ref().child("workmaterials").on("value", snapshot=>{
            if(snapshot.val()!=null){
                this.setState({...this.state, objectValuesArray: Object.values(snapshot.val()).reverse() }, ()=>{
                    console.log(this.state.objectValuesArray);
                })
            }
        })
        
    }
    render() {
        return (
            <div>
                {/* display materials with Current user email and delete button  */}
                <div style={styles} >
                <h1>My Materials</h1>
                 
                {this.state.objectValuesArray? <div>{this.state.objectValuesArray.map((currentSelectedObject)=>{
              if(this.props.user.email===currentSelectedObject.user_Email){
                  return  <AllMaterialsCard state={currentSelectedObject} check={this.state.myItem} />
              }
            })}</div>  : <div>Fetching Data..</div> } 
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
