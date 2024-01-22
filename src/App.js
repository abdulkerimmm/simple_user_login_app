import { useState } from 'react';
import './App.css'
import Button from './component/Button/Button';
import Input from './component/input/Input';
import Form from './component/Form/Form';

function App() {

  // const [text,setText]=useState("baslangic")
   const [userForm, setuserForm]=useState({
     userName:"",
     password:""
   })

  const onValidition=()=>{
    if(userForm.password==="" && userForm.userName===""){
      alert("UserName and password field is empty")
    }
    else if(userForm.password===""){
      alert("password field is empty")
    }else if(userForm.userName===""){
      alert("userName is empty")
    }
    else{
      alert("login is succesful")
    }
 }

 
  return (
  <div className='custom-page' >  
     
    <Form>
        <h1>entering page</h1>        
      <Input  value={userForm.userName} placeholder={" username"} OnceChange={(e)=>{
        //setuserForm( {userName: e.target.value, password:userForm.password})
        setuserForm({...userForm,userName:e.target.value})
        }} />

      <Input type="password"  value={userForm.password} placeholder={" password"} OnceChange={(e)=>{
      // setuserForm( {password: e.target.value, userName: userForm.userName})
      setuserForm({...userForm,password:e.target.value})
        }} />
      
      <Button  text="Enter" onClick={ onValidition }/>
    </Form>

  </div>
  );
}


export default App;





