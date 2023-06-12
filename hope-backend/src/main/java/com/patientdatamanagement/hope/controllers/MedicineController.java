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

import com.patientdatamanagement.hope.entities.Medicines;
import com.patientdatamanagement.hope.service.MedicineService;

@RestController
@RequestMapping("/medicine")
@CrossOrigin(origins = "http://localhost:3000")
public class MedicineController {

	@Autowired
	MedicineService medService;
	
	@PostMapping("/addMedicine")
	public ResponseEntity<?> addMedicine(@RequestBody Medicines medicine){
		try {
			Medicines savedMedicine = medService.addMedicine(medicine);
			return new ResponseEntity<Medicines>(savedMedicine, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>("Medicine not added", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{prescriptionId}")
	public ResponseEntity<?> findAllMedicinesInPrescription(@PathVariable long prescriptionId){
		try {
			List<Medicines> allMedicinesInPrescription = medService.getAllMedicinesByPrescriptionId(prescriptionId);
			return new ResponseEntity<List<Medicines>>(allMedicinesInPrescription, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
