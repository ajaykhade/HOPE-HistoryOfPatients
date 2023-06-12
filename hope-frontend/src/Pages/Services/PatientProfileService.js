import axios from "axios";


const URL = "http://localhost:9090/hope/patient/";

class PatientProfileService {

    getPersonalDetailsByUser = (userId) => {
        console.log(userId);
        return axios.get(URL + 'getPatient/' + userId);
    };

    editProfile = (profile, userId) => {
        return axios.put(URL + 'updatePatient/' + userId, profile);
    }

}

export default new PatientProfileService();