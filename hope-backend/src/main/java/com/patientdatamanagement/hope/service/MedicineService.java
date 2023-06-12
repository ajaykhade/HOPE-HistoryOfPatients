package com.patientdatamanagement.hope.service;

import java.util.List;
import java.util.Optional;

import com.patientdatamanagement.hope.entities.Medicines;

public interface MedicineService {
	
	Medicines addMedicine(Medicines medicine);
	
	Optional<Medicines> getMedicinesByPrescription(long prescriptionId);
	
	List<Medicines> getAllMedicinesByPrescriptionId(long prescriptionId);
}
