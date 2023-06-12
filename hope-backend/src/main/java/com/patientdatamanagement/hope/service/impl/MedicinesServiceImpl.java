package com.patientdatamanagement.hope.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patientdatamanagement.hope.entities.Medicines;
import com.patientdatamanagement.hope.repository.MedicinesRepo;
import com.patientdatamanagement.hope.service.MedicineService;

@Service
@Transactional
public class MedicinesServiceImpl implements MedicineService {

	@Autowired
	MedicinesRepo medRepo;
	
	@Override
	public Medicines addMedicine(Medicines medicine) {
		Medicines savedmedicine = medRepo.save(medicine);
		return savedmedicine;
	}

	@Override
	public Optional<Medicines> getMedicinesByPrescription(long prescriptionId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Medicines> getAllMedicinesByPrescriptionId(long prescriptionId) {
		
		List<Medicines> allMedicinesByPrescription = medRepo.findAllByPrescriptionId(prescriptionId);
		
		return allMedicinesByPrescription;
	}

}
