import React, { Component } from 'react'
import AllMaterialsCard from '../Components/AllMaterialsCard'
import { firebaseApp } from '../firebase';

export default class AllMaterials extends Component {
    constructor(){
        super();
        this.state={
            workplaceItems:[],
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
    

    getAllRelatedMaterials =()=>{
        firebaseApp.database().ref().child("workmaterials").on("value", snapshot=>{
            if(snapshot.val()!=null){
                this.setState({...this.state, objectValuesArray: Object.values(snapshot.val()).reverse() }, ()=>{
                    console.log(this.state.objectValuesArray);
                    console.log(this.state.workplaceItems)
                    firebaseApp.database().ref().child("worklocations").on("value", snapshot=>{
                        const wp=[]
                        if(snapshot.val()!=null){
                            Object.values(snapshot.val()).map((obj)=>{
                               console.log (obj.name_workLocation)
                               wp.push(obj.name_workLocation);
                            });
                           
                
                        }
                        this.setState({...this.state, workplaceItems: wp});
                    })

                })
            }
        })
    }

    componentDidMount(){

    this.getAllRelatedMaterials();

    }

    render() {
        
        return (
            <div style={styles} >
                <h1>All Materials</h1>
                 <div>
               <span>Select workplace </span>                                             
           <select style={{margin:"10px", padding:"5px"}} id="workplace" name="workplace" onClick={this.selectedWorkplace} onChange={this.selectedWorkplace} value={this.state.selectedWorkplace} >
              {this.state.workplaceItems && this.state.workplaceItems.map((workplaceItem)=>{   
               return  ( <option value={workplaceItem} >{workplaceItem}</option>); 
              })}
            </select>
    
  </div>
            {this.state.objectValuesArray? <div>{this.state.objectValuesArray.map((currentSelectedObject)=>{
              if(currentSelectedObject.workLocationName===this.state.selectedWorkplace){
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