package com.patientdatamanagement.hope.service.impl;

import java.util.LinkedList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patientdatamanagement.hope.customExceptions.ResourceNotFoundException;
import com.patientdatamanagement.hope.entities.DoctorsInfo;
import com.patientdatamanagement.hope.entities.Medicines;
import com.patientdatamanagement.hope.entities.PatientInfo;
import com.patientdatamanagement.hope.entities.Prescription;
import com.patientdatamanagement.hope.payloads.MedicinesDTO;
import com.patientdatamanagement.hope.payloads.PrescriptionDTO;
import com.patientdatamanagement.hope.payloads.PrescriptionDTO1;
import com.patientdatamanagement.hope.repository.DoctorsRepo;
import com.patientdatamanagement.hope.repository.MedicinesRepo;
import com.patientdatamanagement.hope.repository.PatientRepo;
import com.patientdatamanagement.hope.repository.PrescriptionRepo;
import com.patientdatamanagement.hope.service.DoctorService;
import com.patientdatamanagement.hope.service.PrescriptionService;

@Service
@Transactional
public class PrescriptionServiceImpl implements PrescriptionService {
	
	@Autowired
	PrescriptionRepo prescRepo;
	
	@Autowired
	DoctorsRepo doctorRepo;
	
	@Autowired
	PatientRepo patientRepo;
	
	@Autowired
	MedicinesRepo medRepo;

	@Autowired
	DoctorService docService;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public Prescription createPrescription(PrescriptionDTO prescriptiondto) {
		
//		System.out.println(prescriptiondto.getDoctorId() + prescriptiondto.getPrescription().getDoctorId());
	
//		DoctorDTO doctordto = docService.getDoctorInfo(prescriptiondto.getDoctorId());
		
//		System.out.println(doctordto.getContactNo());
		
		DoctorsInfo doctor = doctorRepo.findById(prescriptiondto.getDoctorId())
				.orElseThrow(()-> new ResourceNotFoundException("Doctor", "ID", prescriptiondto.getDoctorId()));
		System.out.println(doctor.getContactNo());
		PatientInfo patient = patientRepo.findById(prescriptiondto.getPatientId()).
				orElseThrow(()-> new ResourceNotFoundException("Patient", "ID", prescriptiondto.getPatientId()));
		
		Prescription prescription = prescRepo.save(prescriptiondto.getPrescription());
		prescription.setDoctorId(doctor);
		prescription.setPatientId(patient);
		
		List<Medicines> medicineList = prescriptiondto.getMedicinesList();
		
		for(Medicines m : medicineList) {
			Medicines medicine = medRepo.save(m);
			medicine.setPrescriptionId(prescription);
		}
		
		return null;
	}

	@Override
	public Prescription getPrescription(long prescriptionId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PrescriptionDTO1> getPrescription(String doctorId, String patientId) {
		
		DoctorsInfo doctor = doctorRepo.findById(doctorId).orElseThrow();
		PatientInfo patient = patientRepo.findById(patientId).orElseThrow();
		
		List<Prescription> prescriptionList = prescRepo.findAllByDoctorIdAndPatientId(doctor, patient) ;
		if(prescriptionList == null) {
			throw new ResourceNotFoundException("Prescription","Doctor Id", doctorId, "Patient Id", patientId);
		}
		
		List<PrescriptionDTO1> prescriptiondto1List  = new LinkedList<>();
		
		for(Prescription prescription : prescriptionList) {
//		System.out.println(prescription.getDoctorId().getUIDAINo());
		List<Medicines> medicinesList = medRepo.findAllByPrescriptionId(prescription.getPrescriptionId());
		List<MedicinesDTO> medicinesdtoList = new LinkedList<MedicinesDTO>();
		
		for(Medicines medicine : medicinesList) {
			MedicinesDTO medicinedto = this.modelMapper.map(medicine, MedicinesDTO.class);
			medicinesdtoList.add(medicinedto);
		}
		
		PrescriptionDTO1 prescriptiondto1 = new PrescriptionDTO1();
		prescriptiondto1.setPrescriptionId(prescription.getPrescriptionId());
		prescriptiondto1.setDoctorName(prescription.getDoctorId().getName());
		prescriptiondto1.setHospitalName(prescription.getDoctorId().getHospitalName());
		prescriptiondto1.setCertificateNo(prescription.getDoctorId().getCertificateNo());
		prescriptiondto1.setDoctorContactNo(prescription.getDoctorId().getContactNo());
		prescriptiondto1.setPatientName(prescription.getPatientId().getName());
		prescriptiondto1.setPatientContactNo(prescription.getPatientId().getContactNo());
		prescriptiondto1.setPatientdob(prescription.getPatientId().getDob());
		prescriptiondto1.setAllergies(prescription.getPatientId().getAllergies());
		prescriptiondto1.setMajorIssue(prescription.getPatientId().getMajorIssue());
		prescriptiondto1.setPrescriptionDate(prescription.getPrescriptionDate());
		prescriptiondto1.setBloodPressure(prescription.getBloodPressure());
		prescriptiondto1.setOxygenLevel(prescription.getOxygenLevel());
		prescriptiondto1.setDiagnosis(prescription.getDiagnosis());
		prescriptiondto1.setCareRequired(prescription.getCareRequired());
		prescriptiondto1.setMedicines(medicinesdtoList);
		prescriptiondto1List.add(prescriptiondto1);
		}
		return prescriptiondto1List;
	}

	@Override
	public PrescriptionDTO getPrescription(String patientId) {
		// TODO Auto-generated method stub
		return null;
	}

}
