package com.patientdatamanagement.hope.service;

import java.util.List;

import com.patientdatamanagement.hope.entities.Prescription;
import com.patientdatamanagement.hope.payloads.PrescriptionDTO;
import com.patientdatamanagement.hope.payloads.PrescriptionDTO1;

public interface PrescriptionService {
	
	Prescription createPrescription(PrescriptionDTO prescription);
	
	Prescription getPrescription(long prescriptionId);
	
	List<PrescriptionDTO1> getPrescription(String doctorId, String patientId);
	
	PrescriptionDTO getPrescription(String patientId);

}
