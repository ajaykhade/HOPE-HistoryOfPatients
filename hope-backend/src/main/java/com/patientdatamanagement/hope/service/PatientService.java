package com.patientdatamanagement.hope.service;

import com.patientdatamanagement.hope.entities.PatientInfo;
import com.patientdatamanagement.hope.payloads.PatientDTO1;

public interface PatientService {

	PatientInfo addPatientInfo(PatientInfo patient);
	
	PatientInfo getPatientInfo(String patientId);
	
	PatientDTO1 getPatientInfo(String patientId, String contactNo);
	
	PatientDTO1 updatePatientInfo(PatientDTO1 patient, String patientId);
}
