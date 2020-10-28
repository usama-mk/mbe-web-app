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
        margin: theme.spacing(3, 0, 2), 
        '&:hover': {
            backgroundColor: "#f06d06",
            color: 'black'
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
           <form autoComplete={false} class="go-right" onSubmit={handleSubmit(onSubmit)} >
           <div>
           <input placeholder="Workplace Name"   type="text" name="email" ref={register({required: true})}/>
    <label for="name">Workplace Name</label>
  </div>
  {/*  */}
  <div>
           <input placeholder="Customer name"  type="text"  name="customer name"  ref={register({required: true})}/>
    <label for="customer name">Customer name</label>
  </div>
  {/*  */}
  <div>
    <input placeholder="Street and House Number" name="name" type="text" ref={register({required: true})}/>
    <label for="name">Street and House Number</label>
  </div>
  {/*  */}
  <div>
           <input placeholder="Email"  type="text" name="email" ref={register({required: true})}/>
    <label for="name">Email</label>
  </div>
  
           {/* {errors.password && <p>{errors.password.message}</p>} */}
           <input className={classes.submit} type="submit" placeholder="Add Job Location" />
           </form>
        </div>
    )
}
 