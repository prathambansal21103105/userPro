import React, { useState } from 'react';
import UserForm from './components/Users/UserForm';
import Result from './components/Users/Result';
const dummyUsers=[];
function App() {
  const [showResult,setShowResult]=useState(false);
  const [users,setUsers]=useState(dummyUsers);
  const [error,setError]=useState();
  
  const SubmitHandler=(userInput)=>{
    setShowResult(true);
    const newUser={name:userInput.target[0].value,age:userInput.target[1].value,id:Math.random().toString()};
    if(newUser.age.length===0 || newUser.name.length===0 || +newUser.age<1){
      setError({
        title:'Invalid input',
        message: 'Please enter a valid username and age (>0).'
      })
      return;
    }
    else{
      setUsers((prev)=>{
        return [...prev,newUser];
      })
    }
  }
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
      <UserForm submitControl={SubmitHandler} error={error} errorHandler={errorHandler}/>
      {users.length>0 && showResult && <Result data={users}/>}
    </div>
  );
}

export default App;