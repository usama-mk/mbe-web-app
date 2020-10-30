import React, { Component } from 'react'
import MyHoursCard from '../Components/MyHoursCard';
import { firebaseApp } from '../firebase';

export default class MyHours extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedWorkplace:"",
            id:"",
            myItem: true,
            objectValuesArray:[],
        }
    }
    componentDidMount(){
        firebaseApp.database().ref().child("hoursworked").on("value", snapshot=>{
            if(snapshot.val()!=null){
                this.setState({...this.state, objectValuesArray: Object.values(snapshot.val()) }, ()=>{
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
                <h1>My Hours</h1>
                 
                {this.state.objectValuesArray? <div>{this.state.objectValuesArray.map((currentSelectedObject)=>{
              if(this.props.user.email===currentSelectedObject.user_Email){
                  return  <MyHoursCard state={currentSelectedObject} check={this.state.myItem} />
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
