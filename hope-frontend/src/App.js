import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/doctor/SignIn";
import { SignUp } from "./Pages/doctor/SignUp";
import UserProfile from "./Pages/doctor/UserProfile";
import EditProfile from "./Pages/doctor/EditProfile";
import MedH from './Pages/patient/MedH';
import { RegisterPatient } from './Pages/patient/registerPatient';
import { SearchPatientProfile } from './Pages/patient/findPatient';

import 'bootstrap/dist/css/bootstrap.min.css';
import PatientProfile from './Pages/patient/PatientProfile';
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* common functionality */}
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/userProfile" exact element={<UserProfile />} />
          <Route path="/editProfile" exact element={<EditProfile />} />
          <Route path="/medHistory" exact element={<MedH/>}/>
          <Route path="/registerPatientProfile" exact element={<RegisterPatient/>}/>
          <Route path="/searchPatientProfile" exact element={<SearchPatientProfile/>}/>
          <Route path="/patientProfile" exact element ={<PatientProfile/>}/>
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </Router>
    </>
  );
}

export default App;
