package com.patientdatamanagement.hope.service.impl;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patientdatamanagement.hope.customExceptions.ResourceNotFoundException;
import com.patientdatamanagement.hope.entities.PatientInfo;
import com.patientdatamanagement.hope.payloads.PatientDTO1;
import com.patientdatamanagement.hope.repository.PatientRepo;
import com.patientdatamanagement.hope.service.PatientService;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	PatientRepo patientRepo;
	
	@Autowired
	ModelMapper modelMapper;

	@Override
	public PatientInfo addPatientInfo(PatientInfo patient) {
		
		PatientInfo savedPatientData = patientRepo.save(patient); 
		
		return savedPatientData;
	}

	@Override
	public PatientDTO1 getPatientInfo(String patientId, String contactNo) {
		PatientInfo registeredPatientInfo = patientRepo.findByUIDAINoAndContactNo(patientId, contactNo);
		PatientDTO1 patientdto1 = modelMapper.map(registeredPatientInfo, PatientDTO1.class);
		
		return patientdto1;
	}
	
	@Override
	public PatientInfo getPatientInfo(String patientId) {
		PatientInfo registeredPatientInfo = patientRepo.findByUIDAINo(patientId);
		System.out.println(registeredPatientInfo);
		return registeredPatientInfo;
	}

	@Override
	public PatientDTO1 updatePatientInfo(PatientDTO1 patient, String patientId) {
		
		PatientInfo patientInfo = patientRepo.findById(patientId).orElseThrow(()-> new ResourceNotFoundException("Patient", "ID", patientId));
		
		patientInfo.setAllergies(patient.getAllergies());
		patientInfo.setMajorIssue(patient.getMajorIssue());
		
		PatientDTO1 patientdto1 = modelMapper.map(patientInfo, PatientDTO1.class);
		return patientdto1;
	}

}
