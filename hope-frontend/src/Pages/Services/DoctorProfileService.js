import axios from "axios";


const URL = "http://localhost:9090/hope/doctor/";

class DoctorProfileService {

    getPersonalDetailsByUser = (userId) => {
        console.log(userId);
        return axios.get(URL + 'getDoctor/' + userId);
    };

    editProfile = (profile, userId) => {
        return axios.put(URL + 'update/' + userId, profile);
    }

}

export default new DoctorProfileService();