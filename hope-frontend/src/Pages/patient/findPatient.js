import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchPatientProfile = (props) => {


  const [error, setError] = useState(null);
  const [id, setId] = useState('');
  const navigate = useNavigate()
  const [contactNo, setContactNo] = useState('');

  useEffect(() => {
    document.title = "HOPE HEALTH || searchPatientProfile";
  }, [])

  function valid(data) {
    if (data.id.length === 0) {
      toast.error("Please enter AADHAR ID number");
    }
    else if (data.contactNo.length < 10 || data.contactNo.length > 13) {
      toast.error("contact number length should be between 10 to 13");
    }
   else {
      return true;
    }
  }

  async function handleSearch(event) {
    event.preventDefault();
    const data = {
      id,
      contactNo

    }


    try {
      if (valid(data)) {
        const response = "";
        axios.post('http://localhost:9090/hope/patient/getPatientInfo', data).then((response) => {

          if (response.data != undefined && response.data != "") {
            const result = response.data
            console.log(result)
            console.log(response.data.UIDAINo)

           
              console.log(response.data);
              swal("Success", "Patient Info Found\n Patient Name : " + response.data.name + "", "success");
              navigate('/patientProfile', result)
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
      <form onSubmit={handleSearch}>
        <div style={styles.container}>

          <div>
            <h2 style={styles.SignupText}><b>Search Profile</b></h2>
          </div>

          <div className="mb-3">
            <label>AADHAR ID number</label>
            <input onChange={(event) => {
              setId(event.target.value)
            }} className='form-control'
              type='text' placeholder="AADHAR ID number"
            />
          </div>

          <div className='mb-3'>
            <label>Contact Number</label>
            <input
              onChange={(event) => {
                setContactNo(event.target.value)
              }}
              className='form-control'
              type='number' placeholder="Contact Number"
            />
          </div>

          <div className='mb-3' style={{ marginTop: 15 }}>

            <button style={styles.signupButton}  >Search</button>

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

