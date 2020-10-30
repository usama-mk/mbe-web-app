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
// const categories=["Camera", "Alarm", "Goten", "Hager", "Netwerk"]
const materials=["Kies werknemer", "Maikel", "Lambert", "Rein", "Maarten"]



export default function AddMaterial(props) {
    const classes= useStyles();
    const {register, handleSubmit, errors} = useForm();
    const[categories,setCategories]= useState({});
    const[materials,setMaterials]= useState({});
    var values={};

useEffect(()=>{
    firebaseApp.database().ref().child("Categories").on("value", snapshot=>{
        if(snapshot.val()!=null){
            console.log(snapshot.val())
            setCategories({ ... snapshot.val() })
            

        }
    })
},[])

 const setMat=( )=>{
    //   setMaterials({...categories[id]});
    console.log("hiiiiiiii")
    
    console.log(document.getElementById("category").value)
      values={...categories[document.getElementById("category").value]};
      setMaterials({...values})
      console.log(materials)
 }

    const onSubmit = data => {

        data.user_Email= props.user.email;
        data.invisible="0";
        data.remove="0";
        var newRef = firebaseApp.database().ref().child("workmaterials").push();
        // data.worklocationID= groupId;
        var key= newRef.key;
        data.worklocationID=key;
        console.log(data);
        newRef.set(data)
        // firebaseApp.database().ref().child("workmaterials").push(data);
    };
    return (
        <div  className={classes.paper}>
            <h1>Add Material to Work Location</h1>
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
               <span>Select Category </span>
           <select onChange={setMat} style={{margin:"10px", padding:"5px"}} id="category" name="category" ref={register({required: true})}>
              {Object.keys(categories).map((category)=>{
                    // setMaterials({...categories[category]})
                // values={...categories[category]};
               return  ( <option  value={category} >{category}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <div>
               <span>Select Material </span>
           <select style={{margin:"10px", padding:"5px"}} id="material" name="material" ref={register({required: true})}>
              {Object.values(materials).map((material)=>{
                  
               return  ( <option value={material} >{material}</option>);
                  
              })}
            </select>
    
  </div>
  {/*  */}
  <span>
      Date: 
  </span>
  <input type="date" id="date" name="date" ref={register({required: true})}/>
  
  <div>
    <input style={{marginTop:"10px"}} placeholder="Amount" name="Amount" type="number" step="0.01" ref={register({required: true})}/>
    <label>Amount</label>
  </div>
  {/*  */}
  <div>
           <input style={{marginTop:"10px"}} placeholder="remarks"  type="text"  name="remarks"  ref={register({required: true})}/>
    <label >Any Additional Remarks</label>
  </div>
  {/*  */}
  
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <input style={{backgroundColor:"#f06d06"}} className={classes.submit} type="submit" value="Add material" />
           </form>
        </div>
    )
}
 