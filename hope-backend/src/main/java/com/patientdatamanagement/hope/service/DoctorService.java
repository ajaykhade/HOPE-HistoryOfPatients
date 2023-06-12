package com.patientdatamanagement.hope.service;

import com.patientdatamanagement.hope.entities.DoctorsInfo;
import com.patientdatamanagement.hope.payloads.DoctorDTO;

public interface DoctorService {
	
	DoctorsInfo addDoctorInfo(DoctorsInfo doctor);
	
	DoctorDTO authenticateDoctor(String doctorId, String password);
	
	DoctorDTO getDoctorInfo(String doctorId);
	
	DoctorsInfo updateDoctorInfo(DoctorsInfo doctor, String doctorId);

}
