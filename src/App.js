import React, { useState } from 'react';
import UserForm from './components/Users/UserForm';
import Result from './components/Users/Result';
const dummyUsers=[];
function App() {
  const [showResult,setShowResult]=useState(false);
  const [users,setUsers]=useState(dummyUsers);
  
  const SubmitHandler=(userInput)=>{
    setShowResult(true);
    const newUser={name:userInput.target[0].value,age:userInput.target[1].value,id:Math.random().toString()};
    if(newUser.age>0){
      setUsers((prev)=>{
        return [...prev,newUser];
      })
    }
  }
  return (
    <div>
      <UserForm submitControl={SubmitHandler} />
      {users.length>0 && showResult && <Result data={users}/>}
    </div>
  );
}

export default App;
