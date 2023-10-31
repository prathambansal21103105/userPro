import React, { useState } from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './UserForm.module.css';
const UserForm=(props)=>{
    const [userName,setUserName]=useState('');
    const [userAge,setUserAge]=useState('');
    const userNameHandler=(event)=>{
        setUserName(event.target.value)
    }
    const userAgeHandler=(event)=>{
        setUserAge(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        props.submitControl(event);
        setUserName('');
        setUserAge('');
    }
    return(
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor='fullName'>Username</label>
            <input type='text' name='fullName' id='fullName' value={userName} onChange={userNameHandler}></input>
            <label htmlFor='age'>Age</label>
            <input type='number' name='age' id='age' value={userAge} onChange={userAgeHandler}></input>
            <Button type="submit" >Add User</Button>
        </form>
        </Card>
    );
}
export default UserForm;