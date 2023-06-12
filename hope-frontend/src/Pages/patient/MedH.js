import React from "react";
import { Link } from "react-router-dom";
import main from "../../images/main1.jpg";

const MedH = () => {

  return (
    <div
      style={{
        background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`,
        height: "100vh",
        maxWidth: "100%",
      }}
    >

<div style={{}}>
        <figure class="txtover" style={{ position: "relative" }}>
          <img className="responsive" src={main} style={{ width: "100%", maxHeight: "100vh", Color: "#000000" }}></img>

          <figcaption className="centered" style={{ position: "absolute", bottom: "30vh", left: "40vw" }}>
            <div style={{ color: "crimson" }}>
              <p style={{ fontFamily: "Lucida Handwriting, Cursive ", color: "#2C3639" }}>
                <h3>Welcome To<h2> HOPE HEALTH !</h2> </h3>
                <p><h4>Medical History On Click !</h4></p>
                <br/>
                <p>Save your patients information here and relax.</p>
                <p>You can get information anytime on single click.</p>
              </p>
            </div>
            
            <div className="mb-3" style={{ marginRight: "180px" }}>
              <Link
                className="btn btn-info"
                to={`/registerPatientProfile`}
                style={Styles.buttonStyle}
              >
                Register Patient Profile
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="mb-3" style={{ marginRight: "180px" }}>
              <Link
                className="btn btn-info"
                to={`/searchPatientProfile`}
                style={Styles.buttonStyle}
              >
                Search Patient Profile
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

const Styles = {
  divStyle: {
    //backgroundColor:"#F7ECDE",
    //border:"solid",
    borderStyle: "thin",
    width: "40%",
    display: "flex",

    margin: "auto",
    marginTop: "30vh",
    borderRadius: 30,
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
    //boxShadow: "3px 3px 10px 2px #C00000",
    // backgroundColor:"#F0EBE3"
  },
  loginText: {
    textAlign: "center",
    color: "#C00000",
    fontStyle: "arial",
    marginTop: 10,
  },
  buttonStyle: {
    marginTop: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "15vw",
    height: 40,
    backgroundColor: "#32CD32",
    color: "white",
    borderRadius: 5,
    border: "none",
  },
};

export default MedH;
