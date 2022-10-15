import './Login.css'
import React, {useEffect, useState} from 'react'
// import 'react-toastify/dist/ReactToastify.css';
 import {useNavigate} from 'react-router-dom';

import axios from "axios";
  
function LoginUser() {
  const [data,setUser] = useState({
    user_name: "",
    password: "",

  })
  const navigate = useNavigate()
  useEffect(() =>{
  
  })
  const handlechange = (e) => {
    console.log(data)
    const{name, value} = e.target
    setUser({
      ...data,
      [name]: value
    })
}
const submitForm = () => {
 const {user_name, password} = data
 if(user_name && password) {
  console.log(data)
    axios.post("http://127.0.0.1:8000/login/",data)
  .then(res =>{
    console.log(res);
    navigate('/log-in')
  })
  .catch(err =>{
    console.log(err);
  })

 }
//  else{
//   console.log('hhhhh')
//  }
}

return (
  
    <div className='Form'>
      <form onSubmit={submitForm}>
        <h3>LOGIN</h3>
      
        <div className="username">
          <label>username</label><br></br>
          <input
          type="text"
          name='user_name'
        className="form-control"
            placeholder="Enter username"
            onChange={handlechange}

            
          />
        </div>
        <div className="psw">
          <label>Password</label><br></br>
          <input
            type="password"
            name='password'
            className="form-control"
            placeholder="Enter password"
            onChange={handlechange}

            />
        </div>
        <div className="check">
          <div className="control">
            <input
              type="checkbox"
              className="customt"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="button">
          <button type="button"onClick={submitForm} className="btn btn-primary" >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          {/* Forgot <a href="#">password?</a> */}
        </p>
      </form>
      </div>
    );
  };
export default LoginUser ;
