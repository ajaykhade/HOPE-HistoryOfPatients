import React from 'react'

const func1 = require('../images/functionality1.png')
const func2 = require('../images/functinality2.jpg')
const func3 = require('../images/functionality3.jpg')
const func4 = require('../images/functionality4.jpg')


const Card = () => {

    return (
        <div className='container'>



            <div className='row' style={{ display: 'flex' }}>


                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem",  border: "none", marginLeft: 10 }}>

                        <img src={func1} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>MEDICAL HISTORY</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>You can get medical history of patients online. You have to enter only patients AADHAR card id & you can get all his medical history on a single click.</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem", border: "none", marginLeft: 10 }}>

                        <img src={func2} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: "center", alignItems: "center" }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>KNOW ALLERGY</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>You can see if patient having any allergy on patients profile. Also you can add any new allergy if found. It will helps to give proper treatment to patients.</p>
                        </div>

                    </div> </div>
                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem", border: "none", marginLeft: 10 }}>

                        <img src={func3} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: "center", alignItems: "center" }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>MAJOR ISSUE</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>If patient having major medical issue such as cancer, diabetis etc in past then it will be shown on patients common profile. Also you can add any new disease if found.</p>
                        </div>

                    </div> </div>
                <div className="col-md-3">

                    <div className='card' style={{ width: "16rem", height: "30rem", border: "none", marginLeft: 10 }}>

                        <img src={func4} alt="..." className="card-img-top" style={{ borderRadius: "50%" }} />


                        <div className="card-body" style={{ justifyContent: "center", alignItems: "center" }}>
                            <h5 className="card-title" style={{ fontFamily: 'Nunito' }}><strong>SHOW HEALTH</strong></h5>
                            <p className="card-text" style={{ fontFamily: 'Signika Negative', }}>Not required to carry every doctor's prescription while going to treatment. Persons also can access his medical history by AADHAR id and Contact No.</p>
                        </div>

                    </div>
                </div>
                

            </div>
        </div>

    )
}

export default Card