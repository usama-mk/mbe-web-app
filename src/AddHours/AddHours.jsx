import { Input, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import '../AddWorkLocation/AddWorkLocation.scss';
import { firebaseApp } from '../firebase';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        backgroundColor: "#3f51b5",
        // color: 'white',
        margin: theme.spacing(3, 0, 2), 
        
        '&:hover': {
            backgroundColor: "blue",
            color: 'white',
            fontWeight: "bold"
        }
    },
}));


const workplaceItems=["kies locatie", "HK 25", "Zonnestraal school gebouw", "Project 166", "VR-Trade B.V." ];
const employs=["Kies werknemer", "Maikel", "Lambert", "Rein", "Maarten"]
export default function AddHours(props) {
    const classes= useStyles();
    const {register, handleSubmit, errors} = useForm();
    const[employs,setEmploys]= useState({});
    var values={};

useEffect(()=>{
    firebaseApp.database().ref().child("employs").on("value", snapshot=>{
        if(snapshot.val()!=null){
            console.log(snapshot.val())
            setEmploys({ ... snapshot.val() })
            

        }
    })
},[])



    const onSubmit = data => {
        data.user_Email= props.user.email;
        data.invisible="0";
        data.remove="0";
        var newRef = firebaseApp.database().ref().child("hoursworked").push();
        // data.worklocationID= groupId;
        var key= newRef.key;
        data.worklocationID=key;
        console.log(data);
        newRef.set(data)
    };
    return (
        <div  className={classes.paper}>
            <h1>Add Hours and KM to Work Location</h1>
           <form autoComplete="off" className="go-right" onSubmit={handleSubmit(onSubmit)} >
           <div>
               <span>Select workplace </span>
           <select style={{margin:"10px", padding:"5px"}} id="workplace" name="workplace" ref={register({required: true})}>
              {workplaceItems.map((workplaceItem)=>{
                  
               return  ( <option value={workplaceItem} >{workplaceItem}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <div>
               <span>Select Employee </span>
           <select style={{margin:"10px", padding:"5px"}} id="employee" name="employee" ref={register({required: true})}>
              {Object.values(employs).map((employee)=>{
                  
               return  ( <option value={employee} >{employee}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <span>
      Date: 
  </span>
  <input type="date" id="date" name="date" ref={register({required: true})}/>
  <div>
           <input style={{marginTop:"10px"}} placeholder="Description"  type="text"  name="description"  ref={register({required: true})}/>
    <label >Description</label>
  </div>
  {/*  */}
  <div>
    <input style={{marginTop:"10px"}} placeholder="KM Driven" name="kmDriven" type="number" step="0.01" ref={register({required: true})}/>
    <label>KM Driven</label>
  </div>
  {/*  */}
  <div>
    <input style={{marginTop:"10px"}} placeholder="Number of Hours" name="numberOfHours" type="number" step="0.1" ref={register({required: true})}/>
    <label>Number of Hours</label>
  </div>
  {/*  */}
  <div>
           <input style={{marginTop:"10px"}} placeholder="Parking Cost"  type="number" step="0.01" name="parkingCost" ref={register({required: true})}/>
    <label >Parking Cost</label>
  </div>
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <input style={{backgroundColor:"#f06d06"}} className={classes.submit} type="submit" value="Add Job Data" />
           </form>
        </div>
    )
}
 