import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DoctorProfileService from "../Services/DoctorProfileService";




const EditProfile = () => {

  const navigate = useNavigate();

  const [UIDAINo, setUIDAINo] = useState("");
  const [name, setName] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  

  let userId = sessionStorage.getItem("doctorId");
  userId = "777868300618";
  console.log(userId);

  const updateProfile = (e) => {
    e.preventDefault();
    if (phoneNo.length < 10 || phoneNo.length > 13) {
      toast.error("mobile no. should be of length 10 to 13")
    }

    else if (address.length < 5 || address.length > 50) {
      toast.error('Address must be of min 5 characters and of max 50 characters')
    }

    else {

      const profile = { UIDAINo, name, hospitalName, certificateNo, phoneNo, address};

      if (userId) {
        DoctorProfileService.editProfile(profile, userId)
          .then((response) => {
            console.log("User Profile updated successfully: ", response.data);
            toast.success("Profile updated successfully");
            navigate('/userProfile')
            sessionStorage.setItem("firstName", name)
            window.location.reload();

            // console.log(Profile);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
            toast.error("something went wrong");
          });
      }
    }
  };


  function init() {
    if (userId) {
      DoctorProfileService.getPersonalDetailsByUser(userId)
        .then(response => {
          console.log(response.data)
          setUIDAINo(response.data.UIDAINo)
          setName(response.data.name)
          setHospitalName(response.data.hospitalName)
          setCertificateNo(response.data.certificateNo)
          setPhoneNo(response.data.contactNo)
          setAddress(response.data.address)
        })
        .catch(error => {
          console.log('something went wrong', error);
        })
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className="form-group" style={{ paddingTop: 90, height: "720px", position: "relative", background: `linear-gradient(to right, #B4AEE8 ,#EFEFEF, #93329E)` }}>
      <form onSubmit={updateProfile}>
        <div style={styles.container}>
          <div>
            <h2 style={styles.SignupText}>
              <b>Update Profile</b>
            </h2>
          </div>

          <div className="mb-3">
            <label>AADHAR ID</label>
            <input
              value={UIDAINo}
              onChange={(event) => {
                setUIDAINo(event.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="AADHAR ID number"
              readOnly={true}
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Enter your Last Name"
            />
          </div>

          <div className="mb-3">
            <label>Hospital Name</label>
            <input
              value={hospitalName}
              onChange={(event) => {
                setHospitalName(event.target.value);
              }}
              className="form-control"
              type="text"
            />
          </div>

          <div className="mb-3">
            <label>Certificate No</label>
            <input
              value={certificateNo}
              onChange={(event) => {
                setCertificateNo(event.target.value);
              }}
              className="form-control"
              type="text"
              readOnly={true}
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              value={phoneNo}
              onChange={(event) => {
                setPhoneNo(event.target.value);
              }}
              className="form-control"
              type="number"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-3" style={{ marginTop: 15 }}>
            <button type="submit" style={styles.Button}>
              Update
            </button>

          </div>
        </div>
      </form>
    </div>
  );
};
const styles = {
  container: {
    borderColor: "crimson",
    //borderStyle: "thin",
    width: 400,
    height: 610,
    margin: "auto",
    marginTop: "1vw",
    borderRadius: 20,
    padding: "30px",
    //borderColor: '#C1E6FF',
    borderRadius: 10,
    boxShadow: "2px 2px 25px 1px #B3B3B3",
    broderWidth: 1,
    //borderStyle: 'solid',
    //borderColor:'red',

    //boxShadow: "3px 3px 10px 2px #576F72", //#576F72",
    //border: '1px solid red'
  },
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#BC012E",
    color: "white",
    borderRadius: 15,
    border: "none",

    // marginTop:20,
  },

  SignupText: {
    textAlign: "center",
    color: "#022831",
    fontFamily: "Signika Negative",
    fontStyle: " sans-serif;",
    marginTop: 10,
    //border: '1px solid red'
  },
};

export default EditProfile;
