import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PatientProfile = () => {
  
  const navigate=useNavigate();
  
  function nav(){
    navigate('/editPatientProfile')
  }
  const [Profile, setProfile] = useState("");

  function init() {
    // try {(response) => {
    //     console.log("Patient Profile: ", response.data);
    //     setProfile(response.data);
    //     // console.log(Profile);
    //   }}
    //   catch(error) {
    //     console.log("Something went wrong", error);
    //   };
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{height:"100vh" , backgroundColor:"#ddbdf5cc"}} >
    <div style={{ paddingTop : "20vh"}}>
      <div className="container-fluid" style={Styles.divStyle}>
        
        <div style={{ padding: "15px", width: "100%" }}>
        <div className="col-12 row">
          <div className="col-6">
          <span style={{ fontFamily: "inherit",fontWeight: 500,fontSize : "30px"}}>{"Patient Profile"} </span>
          </div>

          <div className="col-6 plr-0" style={{textAlign : "right"}}>
          <button className="btn btn-outline-primary" style={Styles.buttonStyle} onClick={nav}>Edit</button>
          </div>
        </div>

          <hr />
          <div className="col-12 row">
            <div className="col-6">
            <span
            style={{
              display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"
            }}
          >
            <span style={{ fontFamily: "inherit" , fontSize:"17px", fontWeight:"bold"}}>
              AADHAR ID: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.UIDAINo}
            </span>
          </span>

          <span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold" }}>
              Name: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.name}
            </span>
          </span>

          <span style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px" }}>
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
            Contact No: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.contactNo}
            </span>
          </span>

          <span style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"}} >
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
            Date of Birth: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.dob}
            </span>
          </span>
          <span
            style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"}}
          >
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
              Allergy: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.allergies}
            </span>
          </span>
          <span
            style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"
            }}
          >
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
              Major Issue: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.majorIssue}
            </span>
          </span>
          <br/>
          <div className="mb-3" style={{ marginRight: "180px" }}>
              <Link
                className="btn btn-info"
                to={`/prescriptions`}
                style={Styles.buttonStyle1}
              >
                Show Previous Prescriptions
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
      </div>
    </div>
  );
};
const Styles = {
  divStyle: {
    backgroundColor: "#ffff",
    borderStyle: "thin",
    width: "30%",
    display: "flex",
    marginTop: "5vh",
    borderRadius: "4px",
    padding: "20px",
    //boxShadow: "2px 2px 30px 2px #6B61FF",
    border: "1px solid rgba(0, 0, 0, 0.125)"
  },
  buttonStyle1:{
           
    marginTop:10,
    position:"relative",
    justifyContent:'center', alignItems:'center', height: '50vh',
    width: '25vw',
    height:40,
    borderRadius: 2}

}

export default PatientProfile;
