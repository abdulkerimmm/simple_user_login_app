import { useState } from 'react';
import './App.css'
import Button from './component/Button/Button';
import Input from './component/input/Input';
import Form from './component/Form/Form';
import { type } from '@testing-library/user-event/dist/type';






function App() {

  const onValidition=()=>{
    if(userForm.userName=="" && userForm.password==""){
      alert("bos deger girmezssiniz")
    }
    else{
      alert("basarili bir sekilde degerleri girdiniz")
    }
 }

   const [text,setText]=useState("baslangic")
   const [userForm, setuserForm]=useState({
     userName:"",
     password:""
   })
  return (
  <div className='custom-page' >  
     
     <Form>

      <h1>entering page</h1>
      
     <Input  value={userForm.userName} placeholder={" username"} onChange={(e)=>{
      //setuserForm( {userName: e.target.value, password:userForm.password})
      setuserForm({...userForm,userName:e.target.value})
      }} />

   <Input type="password"  value={userForm.password} placeholder={" password"} onChange={(e)=>{
     // setuserForm( {password: e.target.value, userName: userForm.userName})
     setuserForm({...userForm,password:e.target.value})
      }} />
    
   <Button  text="Enter" onClick={ onValidition }/>
   </Form>

  </div>
  );
}


export default App;





