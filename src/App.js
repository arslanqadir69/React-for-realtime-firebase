import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [user, setUser] = useState({
    id:"",
    email:"",
    password:""
  });
 let name,value;
  const getUserData=(event)=>{
    name = event.target.name;
     value = event.target.value;
    setUser({...user, [name]:value});
    console.log(user);
  };

  const postData= async (e)=>{
    console.log(user);
    e.preventDefault();
    const {id, email, password}=user;
    
      const res = await fetch("https://reactfrom-7824f-default-rtdb.firebaseio.com/myReactForm.json",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id,
        email,
        password
      })
    });
    if(res){
      setUser({
        id:"",
    email:"",
    password:""
      })
    }
    alert("Data Successfully Save");
  };
  return (
    <div style={{width:"60%", height:"400px", margin:"auto" }}>
      <h1>Contact Form</h1>
      <form method="POST" >
        <label>Id</label>
        <input type="text" placeholder='Enter your Id' name='id' onChange={getUserData} value={user.id} />
        <label>Email</label>
        <input type="text" placeholder='Enter your Email' name='email' onChange={getUserData} value={user.email} />
        <label>Password</label>
        <input type="text" placeholder='Enter your Password' name='password' onChange={getUserData} value={user.password} />
        {/* <input type="submit"  /> */}
        <button onClick={postData}>submit</button>
      </form>
    </div>
  );
}

export default App;
