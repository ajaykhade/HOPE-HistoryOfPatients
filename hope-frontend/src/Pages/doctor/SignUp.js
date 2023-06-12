import React from 'react'
import { useEffect, useState } from 'react'
//import { Link } from "react-router-dom"
//import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UserServices from '../Services/UserServices'

export const SignUp = () => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [state, setState] = useState({
    UIDAINo: "", name: "", hospitalName: "", certificateNo: "", contactNo: "", address: "", password: ""
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => { document.title = "HOPE HEALTH || SignUp"; }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function checkPasswordComplexity(pwd) {

    var regularExpression = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    var valid = regularExpression.test(pwd);
    return valid;
  }

  function valid(data, confirmPassword) {
    if (data.UIDAINo.length === 0) {
      toast.error("Please enter AADHAR ID number");
    }
    else if (data.password.length === 0) {
      toast.error("Please enter password");
    }
    else if (data.password.length < 6 || data.password.length > 10) {
      toast.error("password length should be between 6 to 10");
    }
    else if (!checkPasswordComplexity(data.password)) {
      toast.error("password must be alphanumeric");
    }
    else if (data.password !== confirmPassword) {
      toast.error("password and confirm password should match");
    }
    else if (data.name.length === 0) {
      toast.error("Please enter your name");
    }
    else if (data.certificateNo.length === 0) {
      toast.error("Please enter certificate No");
    }
    else if (data.address.length === 0) {
      toast.error("Please enter address");
    }
    else if (data.contactNo.length === 0) {
      toast.error("Please enter phone no");
    }
    else {
      return true;
    }
  }

  async function handleSignUp(event) {
    event.preventDefault();

    if (valid(state, confirmPassword)) {
      UserServices.createUser(state)
        .then(response => {
          console.log("User added successfully", response.data);
          toast.success("User Added successfully!")
          window.alert("User Added successfully!")

          setState({ UIDAINo: "", name: "", hospitalName: "", certificateNo: "", contactNo: "", address: "", password: "" });
          setConfirmPassword("");

          navigate('/signIn')
        })
        .catch(error => {
          toast.error("ENTER DATA PROPERLY !!!!")
          console.log('something went wrong', error);
        })
    }
  }




  return (
    <div style={{ background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "100vh" }} ><br />

      <form onSubmit={handleSignUp}>
        <div style={styles.container}>

          <div>
            <h2 style={styles.SignupText}><b>SignUp</b></h2>
          </div>

          <div className="mb-3 ">
            <label>AADHAR ID number</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="AADHAR ID number" required name="UIDAINo" value={state.UIDAINo}
            />
          </div>

          <div className='mb-3'>
            <label>Password</label>
            <input
              onChange={handleInputChange}
              className='form-control'
              type='password' placeholder="Password" name="password" value={state.password}
            />
          </div>

          <div className='mb-3'>
            <label>Confirm Password</label>
            <input
              onChange={(event) => {
                setConfirmPassword(event.target.value)
              }}
              className='form-control'
              type='password' placeholder="Confirm Password" name="confirmPassword" value={confirmPassword}
            />
          </div>

          <div className="mb-3">
            <label>Full Name</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Full Name" name="name" value={state.name}
            />
          </div>

          <div className="mb-3">
            <label>Hospital Name</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Hospital Name" name="hospitalName" value={state.hospitalName}
            />
          </div>

          <div className="mb-3">
            <label>Certificate No</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Certificate No" name="certificateNo" value={state.certificateNo}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Address" name="address" value={state.address}
            />
          </div>

          <div className="mb-3">
            <label>Contact No</label>
            <input onChange={handleInputChange} className='form-control'
              type='number' placeholder="Phone Number" name="contactNo" value={state.contactNo}
            />
          </div>

          <div style={{ marginTop: 20, marginLeft: 10 }}>
            <i>Already have an account? </i><Link to='/signIn'>Login here</Link>
          </div >

          <div className='mb-3' style={{ marginTop: 15 }}>
            <button style={styles.signupButton} >Signup</button>
          </div>
        </div>
      </form>
    </div>
  )

}


const styles = {
  container: {
    borderColor: "crimson",

    width: 500,
    margin: "auto",
    marginTop: "8vw",
    borderRadius: 20,
    padding: "30px",

    borderRadius: 10,
    broderWidth: 1,
    backgroundColor: "white",

    boxShadow: "3px 3px 10px 2px #576F72",
  },
  signupButton: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: '#BC012E',
    color: 'white',
    borderRadius: 15,
    border: 'none',

    // marginTop:20,

  },

  SignupText: {
    textAlign: "center",
    color: "#022831",
    fontFamily: 'Signika Negative',
    fontStyle: " sans-serif;",
    marginTop: 10,
    //border: '1px solid red'
  }
}
