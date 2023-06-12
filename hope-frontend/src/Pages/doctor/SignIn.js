import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SignIn = (props) => {


  const [error, setError] = useState(null);
  const [idNo, setIdNo] = useState('');
  const navigate = useNavigate()
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = "HOPE HEALTH || signIn";
  }, [])

  function checkPasswordComplexity(pwd) {

    var regularExpression = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    var valid = regularExpression.test(pwd);
    return valid;
  }
  function valid(data) {
    if (data.idNo.length === 0) {
      toast.error("Please enter email");
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
    else {
      return true;
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const data = {
      idNo,
      password

    }


    try {
      if (valid(data)) {
        const response = "";
        axios.post('http://localhost:9090/hope/doctor/signIn', data).then((response) => {

          if (response.data != undefined && response.data != "") {
            const result = response.data
            console.log(result)
            console.log(response.data.UIDAINo)

            //window.localStorage.setItem('user', JSON.stringify(response.data));
            //sessionStorage["token"] = result.jwt;
            sessionStorage["doctorId"] = result.UIDAINo;
            sessionStorage["hospitalName"] = result.hospitalName;
            sessionStorage["firstName"] = result.name;


              console.log(response.data);
              swal("Success", "Doctor Logged In Successfully\n Doctor Name : " + response.data.name + "", "success");
              navigate('/')
              window.location.reload();

    

          } else {
            toast.error('Invalid credentials');

          }
        }).catch((error) => {
          console.log("invalid")
          toast.error("Invalid credentials!!")
        })
      }
    } catch (error) {

      console.log(error);
    }

  }

  return (
    <div style={{ background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "100vh" }} ><br />
      <form onSubmit={handleLogin}>
        <div style={styles.container}>

          <div>
            <h2 style={styles.SignupText}><b>Login</b></h2>
          </div>

          <div className="mb-3">
            <label>AADHAR ID number</label>
            <input onChange={(event) => {
              setIdNo(event.target.value)
            }} className='form-control'
              type='text' placeholder="AADHAR ID number"
            />
          </div>

          <div className='mb-3'>
            <label>Password</label>
            <input
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              className='form-control'
              type='password' placeholder="Password"
            />
          </div>

          <div style={{ marginTop: 20, marginLeft: 10 }}>
            <i>Do not have an account? </i><Link to='/signup'>Register Here!</Link><br />
            {/* <Link to='/forgot-password'>Forgot Password?</Link> */}
          </div >

          <div className='mb-3' style={{ marginTop: 15 }}>

            <button style={styles.signupButton}  >Login</button>

          </div>
        </div>
      </form>
    </div>





  )

}

const styles = {
  container: {
    borderColor: "crimson",

    width: 350,
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

