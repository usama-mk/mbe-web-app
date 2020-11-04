import { IconButton, Input, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import '../AddWorkLocation/AddWorkLocation.scss';
import { firebaseApp } from '../firebase';
import { toast } from 'react-toastify';
import '../Components/toast.css';
import 'react-toastify/dist/ReactToastify.css';


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


// const wp=["kies locatie", "HK 25", "Zonnestraal school gebouw", "Project 166", "VR-Trade B.V." ];
export default function AddHours(props) {
    const classes= useStyles();
    const {register, handleSubmit, errors, reset} = useForm();
    const[employs,setEmploys]= useState({});
    const[workplaceItems,setWorkplaceItems]= useState([]);
    const[workNameKeys,setWorkNameKeys]= useState([]);
    var values={};

useEffect(()=>{
    firebaseApp.database().ref().child("employs").on("value", snapshot=>{
        if(snapshot.val()!=null){
            
            setEmploys({ ... snapshot.val() })
            

        }
    })
    firebaseApp.database().ref().child("worklocations").on("value", snapshot=>{
        const wp=[]
        if(snapshot.val()!=null){
            console.log(Object.values(snapshot.val()).map((obj)=>{
               console.log (obj.name_workLocation)
               wp.push(obj.name_workLocation);
            }));
         setWorkplaceItems(wp);
            

        }
    })

    firebaseApp.database().ref().child("worklocations").on("value", snapshot=>{
        const wp=[]
        const wlObjArr=[]
        if(snapshot.val()!=null){
            console.log(Object.values(snapshot.val()).map((obj)=>{
               console.log (obj.name_workLocation)
               wp.push(obj.name_workLocation);
               var name= obj.name_workLocation;
               const wlO={
                   [name]: obj.key
               }
               wlObjArr.push(wlO); 
               console.log(`here is the name : ${ name } and id ${obj.key}`); 
            }));
            console.log(`here is the wl whole obj : ${wlObjArr[0].softics}`); 
            setWorkNameKeys(wlObjArr);
         
            

        }
    })

},[])



    const onSubmit = data => {
        data.user_Email= props.user.email;
        data.invisible="0";
        data.remove="0";
        const dateL= (new Date(data.date));
        var dd=(dateL.getDate());
        var mm=(dateL.getMonth());
        mm=mm+1;
        var yyyy=(dateL.getFullYear());
        data.date= `${mm}/${dd}/${yyyy}`
        workNameKeys.map((workNameKey)=>{
            // console.log(`${Object.keys(workNameKey)}`)
           var workNameKey1= Object.keys(workNameKey)
           var workNamevalue1= Object.values(workNameKey)
           console.log(`keys list ${workNameKey1}`)
           console.log(`values list ${workNamevalue1}`)
           console.log(data.workLocationName)
            if(workNameKey1 == data.workLocationName){
                
                 data.worklocationID = workNamevalue1[0];
                 
            }
        })
        var newRef = firebaseApp.database().ref().child("hoursworked").push();
        // data.worklocationID= groupId;
        var key= newRef.key;
        // data.worklocationID=key;
        console.log(data);
        newRef.set(data);
        toast.success('🚀 Successfully added the data to the database ', {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            reset();
    };
    return (
        <div  className={classes.paper}>
            <h1>Add Hours and KM to Work Location</h1>
           <form autoComplete="off" className="go-right" onSubmit={handleSubmit(onSubmit)} >
           <div>
               <span>Select workplace </span>
           <select style={{margin:"10px", padding:"5px"}} id="workplace" name="workLocationName" ref={register({required: true})}>
              {workplaceItems.map((workplaceItem)=>{
                  
               return  ( <option value={workplaceItem} >{workplaceItem}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <div>
               <span>Select Employee </span>
           <select style={{margin:"10px", padding:"5px"}} id="employee" name="employ" ref={register({required: true})}>
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
    <input style={{marginTop:"10px"}} placeholder="Number of Hours" name="hoursworked" type="number" step="0.1" ref={register({required: true})}/>
    <label>Number of Hours</label>
  </div>
  {/*  */}
  
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <IconButton>
           <input style={{backgroundColor:"#f06d06"}} className={classes.submit} type="submit" value="Add Job Data" />

           </IconButton>
           </form>
        </div>
    )
}
 