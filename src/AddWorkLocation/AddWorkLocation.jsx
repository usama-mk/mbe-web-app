import { Input, TextField } from '@material-ui/core';
import React from 'react';
import {useForm} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import './AddWorkLocation.scss';


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



export default function AddWorkLocation() {
    const classes= useStyles();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div  className={classes.paper}>
           <form autoComplete="off" className="go-right" onSubmit={handleSubmit(onSubmit)} >
           <div>
           <input style={{marginTop:"10px"}} placeholder="Workplace Name"   type="text" name="Workplace Name" ref={register({required: true})}/>
    <label >Workplace Name</label>
  </div>
  {/*  */}
  <div>
           <input style={{marginTop:"10px"}} placeholder="Customer name"  type="text"  name="customer name"  ref={register({required: true})}/>
    <label >Customer name</label>
  </div>
  {/*  */}
  <div>
    <input style={{marginTop:"10px"}} placeholder="Street and House Number" name="Street and House Number" type="text" ref={register({required: true})}/>
    <label>Street and House Number</label>
  </div>
  {/*  */}
  <div>
    <input style={{marginTop:"10px"}} placeholder="Zip Code Place" name="Zip Code Place" type="text" ref={register({required: true})}/>
    <label>Zip Code Place</label>
  </div>
  {/*  */}
  <div>
           <input style={{marginTop:"10px"}} placeholder="Email"  type="text" name="emailNameProp" ref={register({required: true})}/>
    <label >Email</label>
  </div>
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <input style={{backgroundColor:"#f06d06"}} className={classes.submit} type="submit" value="Add Job Location" />
           </form>
        </div>
    )
}
 