import React from "react";
import { Link } from "react-router-dom";
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedIn from '../images/linkedIn.png';
import mailicon from '../images/mailicon.png';
import callicon from '../images/callicon.png';
import footer from '../images/footer-bg.jpg';
import f from '../images/f.jpg';
import main from '../images/main1.jpg';
import '../CSS/Home.css'
import Card from "../components/Card";
import about from '../images/aboutUs.jpg';
export const Home = () => {
  return (
    <div>
      {/* wallpaper */}
      <div style={{}}>
        <figure class="txtover" style={{ position: "relative" }}>
          <img className="responsive" src={main} style={{ width: "100%", maxHeight: "100vh", Color: "#000000" }}></img>

          <figcaption className="centered" style={{ position: "absolute", bottom: "50vh", left: "40vw" }}>
            <div style={{ color: "crimson" }}>
              <p style={{ fontFamily: "Lucida Handwriting, Cursive ", color: "#2C3639" }}>
                <h3>Welcome To<h2> HOPE HEALTH !</h2> </h3>
                <p><h4>Medical History On Click !</h4></p>
              </p>
            </div>
          </figcaption>
        </figure>
      </div>


      {/* Activities */}
      <div style={{ maxWidth: "100%", height: "auto", backgroundColor: "white" }} >

        <div style={{ marginTop: "5vh" }}>
          <p style={{ fontFamily: "Cookie, Cursive ", textAlign: "center" }}>
            <h1>What Can You Do Here ?</h1>
          </p>
        </div><br />
        <div style={{}}>
          <div>
            <Card />
          </div>
        </div>
      </div>
      <br />

      {/* image corousel */}
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

        <ol class="carousel-indicators">
          <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
        </ol>


        <div class="carousel-inner">

          <div class="carousel-item active" data-bs-interval="4000">
            <img src="https://clubmahindra.gumlet.io/blog/media/section_images/placestovi-3f0fd09d5acb0c5.jpg?w=480&dpr=2.6" class="d-block w-100 h-40" className="d-block w-100" alt="Slide 1" style={{ maxHeight: "80vh", minHeight: "50vh" }}></img>
            <div class="carousel-caption d-none d-md-block"><br></br>

              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                  <h1 class="mb-4" className='head1' color='cyan'><b>HOPE HEALTH :- History Of Patients </b></h1><br></br>


                  <h3 class="mb-10" className='head2'><h3><b><br></br>Access your medical history from any device, any time and
                    any where in world from one single source. You can show your past treatments and medicines given to doctor,
                    so you can get proper treatment always from any unknown doctor also. Doctor's can update data in your profile, so your medical information is always updated. What’s more, you can feel safe
                    knowing you have complete data security with 24/7 global hosting compliance and reliability. <br></br>  </b> <br></br></h3></h3><br></br>
                </div>

              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2018/12/Panoramic-Beauty-of-Taj-Mahal-Tour-My-India--1024x489.jpg" class="d-block w-100" alt="Slide 2" style={{ maxHeight: "80vh", minHeight: "50vh" }} ></img>
            <div class="carousel-caption d-none d-md-block"><br></br>

              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                  <h1 class="mb-4" className='head1' color='cyan'><b>Ask Doctor to add your treatment here also.</b></h1><br></br>


                  <h3 class="mb-10" className='head2'><h2><b><br></br>While you are out of your city and needs any medical treatment. Ask that doctor to add your treatment information on profile. So your medical history will be always updated. <br></br>  </b> <br></br></h2></h3><br></br>
                </div>

              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/1524784/Image/1581333061_8_1.jpg" class="d-block w-100 h-40" alt="Slide 3" style={{ maxHeight: "80vh", minHeight: "50vh" }}></img>
            <div class="carousel-caption d-none d-md-block"><br></br>

              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                  <h1 class="mb-4" className='head1' color='cyan'><b>HOPE HEALTH will always HELP </b></h1><br></br>


                  <h3 class="mb-10" className='head2'><h3><b><br></br> <br></br>  </b> <br></br></h3></h3><br></br>
                </div>

              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src="https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/Rajasthan_.jpg" class="d-block w-100 h-40" alt="Slide 4" style={{ maxHeight: "80vh", minHeight: "50vh" }}></img>
            <div class="carousel-caption d-none d-md-block"><br></br>

              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                  <h1 class="mb-4" className='head1' color='cyan'><b>Make your life happy and healthy.</b></h1><br></br>


                  <h3 class="mb-10" className='head2'><h3><b><br></br> <br></br>  </b> <br></br></h3></h3><br></br>
                </div>

              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src="https://lh3.googleusercontent.com/VDPp6VUWdRyP3NjQjIcKUJc8M58XLQBRqNcxAJ8ID0KRRCprBl4G-a1VLg6kdHKDJncxmxPnxZo9QGPuHUvCMBAni2VxQ0EjfSvlvQHE=w1000?s=300" alt="Slide 5" width="100%" style={{ maxHeight: "80vh", minHeight: "50vh" }}></img>
            <div class="carousel-caption d-none d-md-block"><br></br>

              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                  <h1 class="mb-4" className='head1' color='cyan'><b>One Place Many Surprises.. </b></h1><br></br>


                  <h3 class="mb-10" className='head2'><h3><b><br></br> <br></br>  </b> <br></br></h3></h3><br></br>
                </div>

              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div><br /><br />

      {/* ********About Us******* */}

      <div s style={{ backgroundColor: "rgba(0, 0.5, 0.5, 0.1)", maxWidth: "100%", height: "auto", display: "flex" }}>
        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50%" }}>
          <img src={about} alt="..." style={{ maxHeight: "58vh", maxWidth: "80%", boxShadow: "25px 25px 4px 10px rgba(0, 0.5, 0.5, 0.3)" }} />
        </span>

        <span style={{ maxWidth: "50%", padding: "0 50px 0 0", display: "flex", justifyContent: "center", alignItems: "center" }}>

          <p style={{ fontFamily: 'Signika Negative', fontSize: 18.5 }}> <p style={{ fontFamily: "Cookie, Cursive ", textAlign: "center" }}>
            <h1>ABOUT US</h1>

          </p>
            After 65+ age body of humans become very sensitive. Any wrong medicine can cause Allergy. Also if they have any major disease like cancer,
            diabeties etc they require to prescribe medicines carefully so no any side effect will cause on health.
              <br/>
              <br/>
            "HOPE HEALTH" is designed to resolve such problems related to health. Our objective is to provide a single place where all the medical history of patients
            is saved. Doctors can see previous records of the treatments, find if having any major diseases or allergies and then do the proper treatment
            by seeing all medical history of Patient. It will helps for Patients and Doctors both to get better care in treatments.

            {/* The main purpose of “ HOPE HEALTH ” is to provide single place for all health related data.
            While going for treatment you need to carry all past prescriptions. It is looking very unconvinient to maintain and handle that papers.
            Now not required to carry heavy bag of papers. You just required to enter id and all your medical history will be in front of doctors within single click only.
            "HOPE HEALTH" is here to carry your medical data always, you not required to care about any papers living back.
            Our objective is to store all medical info on one place. So if person is anywhere in world can access his medical history and get proper treatment always. */}
          </p>
        </span>
      </div><br></br><br />


     {/* ******** FOOTER ********** */}
     <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={footer} style={{ width: "100%", minHeight: "41vh",maxHeight: "50vh", position: "absolute" }}></img>
        <span style={{ width: "20vw", position: "relative", marginTop: "6vh", textAlign: "center" }}>
          <h4 style={{ fontFamily: "Cookie, Cursive ", color: "white" }}>Quick Links</h4><br />
          <Link to='/' style={{ fontFamily: 'Nunito', color: "white", textDecoration: "none" }} >Home </Link><br />
          <Link to='/medHistory' style={{ fontFamily: 'Nunito', color: "white", textDecoration: "none" }}>MedH </Link><br />
          <Link to='/feedback' style={{ fontFamily: 'Nunito', color: "white", textDecoration: "none" }}>feedback</Link><br />
          <Link to='/faq' style={{ fontFamily: 'Nunito', color: "white", textDecoration: "none" }}>FAQs</Link><br />
          <Link to='/contactus' style={{ fontFamily: 'Nunito', color: "white", textDecoration: "none" }}>ContactUs</Link>

        </span>

        <span style={{ width: "20vw", position: "relative", marginTop: "6vh", textAlign: "center" }}>
          <h4 style={{ fontFamily: "Cookie, Cursive ", color: "white" }}>Contact Us</h4><br />
          <h6 style={{ fontFamily: 'Nunito', textAlign: "center", color: "white" }}><img src={mailicon} style={{ height: "5vh" }}></img> ajaykhade25@gmail.com</h6>
          <h6 style={{ fontFamily: 'Nunito', textAlign: "center ", color: "white" }}><img src={callicon} style={{ height: "5vh" }}></img> +917744965911</h6>

        </span>

        <span style={{ width: "20vw", position: "relative", marginTop: "6vh", textAlign: "center" }}>
          <h4 style={{ fontFamily: "Cookie, Cursive ", color: "white" }}>Follow Us</h4><br />
          <h6 style={{ fontFamily: 'Nunito', textAlign: "center", color: "white" }}><img src={facebook} style={{ height: "5vh" }}></img> facebook</h6>
          <h6 style={{ fontFamily: 'Nunito', textAlign: "center ", color: "white" }}><img src={instagram} style={{ height: "5vh" }}></img> instagram</h6>
          <h6 style={{ fontFamily: 'Nunito', textAlign: "center", color: "white" }}><img src={linkedIn} style={{ height: "5vh" }}></img>  linkedIn</h6>
          <h6 style={{ fontFamily: 'Nunito', textAlign: "center ", color: "white" }}><img src={twitter} style={{ height: "5vh" }}></img>    twitter</h6>

        </span>
      </div>

    </div>
  );
};
