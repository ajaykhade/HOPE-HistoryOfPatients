import React from 'react'
import { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PatientServices from "../Services/PatientServices"

export const RegisterPatient = () => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [state, setState] = useState({
    UIDAINo: "", name: "", contactNo: "", dob: "", allergies: "", majorIssue: ""
  });
  
  useEffect(() => { document.title = "HOPE HEALTH || Register"; }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function valid(data) {
    if (data.UIDAINo.length === 0) {
      toast.error("Please enter AADHAR ID number");
    }
    else if (data.name.length === 0) {
      toast.error("Please enter name");
    }
    else if (data.contactNo.length < 10 || data.contactNo.length > 13) {
      toast.error("Phone number length should be between 10 to 13");
    }
   else if (data.dob.length === 0) {
      toast.error("Please enter your date of birth");
    }
    else {
      return true;
    }
  }

  async function handleRegister(event) {
    event.preventDefault();
      if(valid(state)){
        
      PatientServices.registerPatient(state)
        .then(response => {
          console.log("Patient info registered successfully", response.data);
          toast.success("Registered successfully!")
          window.alert("Registered successfully!")

          setState({ UIDAINo: "", name: "", contactNo: "", dob: "", allergies: "", majorIssue: "" });

          navigate('/patientProfile')
        })
        .catch(error => {
          toast.error("ENTER DATA PROPERLY !!!!")
          console.log('something went wrong', error);
        })
    }
  }




  return (
    <div style={{ background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "100vh" }} ><br />

      <form onSubmit={handleRegister}>
        <div style={styles.container}>

          <div>
            <h2 style={styles.SignupText}><b>Register Patient</b></h2>
          </div>

          <div className="mb-3 ">
            <label>AADHAR ID number</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="AADHAR ID number" required name="UIDAINo" value={state.UIDAINo}
            />
          </div>

          <div className="mb-3">
            <label>Full Name</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Full Name" name="name" value={state.name}
            />
          </div>

          <div className="mb-3">
            <label>Contact No</label>
            <input onChange={handleInputChange} className='form-control'
              type='number' placeholder="Phone Number" name="contactNo" value={state.contactNo}
            />
          </div>

          <div className="mb-3">
            <label>Date of Birth</label>
            <input onChange={handleInputChange} className='form-control'
              type='date' placeholder="Date of Birth" name="dob" value={state.dob}
            />
          </div>

          <div className="mb-3">
            <label>Allergy</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Any Allergy" name="allergies" value={state.allergies}
            />
          </div>

          <div className="mb-3">
            <label>Major Issue</label>
            <input onChange={handleInputChange} className='form-control'
              type='text' placeholder="Major Disease" name="majorIssue" value={state.majorIssue}
            />
          </div>

          <div className='mb-3' style={{ marginTop: 15 }}>
            <button style={styles.signupButton} >Register</button>
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
