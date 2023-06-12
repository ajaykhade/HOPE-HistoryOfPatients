import axios from 'axios';
const URL = "http://localhost:9090/hope/patient";

class PatientService {
   
    registerPatient(state)  {
        return axios.post(URL + '/addPatient', state );
    }

}

export default new PatientService;
