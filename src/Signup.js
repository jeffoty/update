import React, {useEffect, useState} from 'react'
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate} from 'react-router-dom';

import axios from "axios";

function RegisterUser(register) {
  const [data,setUser] = useState({
      first_name: "",
      last_name: "",
      user_name: "",
      password: "",
      county: "",
      neighbourhood_association: "",
})
// const navigate = useNavigate()
// useEffect(() =>{
// 
// })

const handlechange = (e) => {
      console.log(data)
      const{name, value} = e.target
      setUser({
        ...data,
        [name]: value
      })
}
const submitForm = () => {
   const {first_name, last_name, user_name, password, county, neighbourhood_association} = data
   if(first_name && last_name && user_name && password && county && neighbourhood_association) {
    console.log(data)
      axios.post("http://127.0.0.1:8000/register/",data)
    .then(response =>{
      console.log(response);
    //   navigate('/sign-in')
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
      <div className="Form">
        <form onSubmit={submitForm}>
          <h3>SIGN UP</h3>
    
          <div className="first">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="first_name"
              onChange={handlechange}

            />
          </div>
          <div className="last">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Last name"
              onChange={handlechange}

            />
          </div>
          <div className="Username" />
          <label>user name</label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Enter username"
            onChange={handlechange}
            
          />
          <div className="county">
            <label>County</label>
            <input
              type="text"
              name="county"
              className="form-control"
              placeholder="Enter county"
              onChange={handlechange}
            />
          </div>
          <div className="Neighborhood association">
            <label>Neighborhood</label>
            <input
              type="text"
              name="neighbourhood_association"
              className="form-control"
              placeholder="Enter Neighborhood"
              onChange={handlechange}
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handlechange}
            />
          </div>
          <div className="Confirmpassword">
            <label>Confirmpassword</label>
            <input
              type="confirmpassword"
              name="confirmpassword"
              className="form-control"
              placeholder="Enter Confirmpassword"
            />
          </div>
          <div className="button">
            <button type="button" onClick={submitForm} className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
        <div className="part">
        </div>
      </div>

    );
}    
export default RegisterUser;
    



