package com.patientdatamanagement.hope.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patientdatamanagement.hope.entities.PatientInfo;
import com.patientdatamanagement.hope.payloads.PatientDTO;
import com.patientdatamanagement.hope.payloads.PatientDTO1;
import com.patientdatamanagement.hope.service.PatientService;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {
	
	@Autowired
	PatientService patientservice;
	
	@PostMapping("/addPatient")
	public ResponseEntity<?> addPatientInfo(@RequestBody PatientInfo patient){
		//API working
		System.out.println("ajay");
		try {
			PatientInfo savedPatientInfo = patientservice.addPatientInfo(patient);
			return new ResponseEntity<PatientInfo>(savedPatientInfo, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>("Patient Data not saved. Please try again", HttpStatus.BAD_REQUEST);
		}	
	}
	
	@PostMapping("/getPatientInfo")
	public ResponseEntity<?> getPatientInfo(@RequestBody PatientDTO patientdto){
		//API working
		try {
//			System.out.println(patientdto.getId() + " " + patientdto.getContactNo());
			PatientDTO1 registeredPatientData = patientservice.getPatientInfo(patientdto.getId(), patientdto.getContactNo());
			return new ResponseEntity<PatientDTO1>(registeredPatientData, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Patient Data not found. Please try again", HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/updatePatientInfo/{patientId}")
	public ResponseEntity<?> updatePatientInfo(@RequestBody PatientDTO1 patient, @PathVariable String patientId){
		//API working
		try {
			PatientDTO1 updatedPatientInfo = patientservice.updatePatientInfo(patient, patientId);
			return new ResponseEntity<PatientDTO1>(updatedPatientInfo, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}	
	}

}
