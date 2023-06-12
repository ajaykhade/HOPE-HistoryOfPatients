package com.patientdatamanagement.hope.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patientdatamanagement.hope.entities.Prescription;
import com.patientdatamanagement.hope.payloads.PrescriptionDTO;
import com.patientdatamanagement.hope.payloads.PrescriptionDTO1;
import com.patientdatamanagement.hope.service.PrescriptionService;

@RestController
@RequestMapping("/prescription")
@CrossOrigin(origins = "http://localhost:3000")
public class PrescriptionController {

	@Autowired
	PrescriptionService prescService;
	
	@PostMapping("/createPrescription")
	public ResponseEntity<?> createPrescription(@RequestBody PrescriptionDTO prescriptiondto){
		//API working
		try {
			Prescription savedPrescription = prescService.createPrescription(prescriptiondto);
			return new ResponseEntity<Prescription>(savedPrescription, HttpStatus.OK); 
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getPrescription/{doctorId}/{patientId}")
	public ResponseEntity<List<PrescriptionDTO1>> getPrescription(@PathVariable String doctorId, @PathVariable String patientId){
		//API working
		List<PrescriptionDTO1> prescdto = prescService.getPrescription(doctorId, patientId);
			return new ResponseEntity<List<PrescriptionDTO1>>(prescdto, HttpStatus.OK);
	}
}
