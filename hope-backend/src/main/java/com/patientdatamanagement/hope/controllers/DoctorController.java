package com.patientdatamanagement.hope.controllers;

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

import com.patientdatamanagement.hope.entities.DoctorsInfo;
import com.patientdatamanagement.hope.payloads.DoctorDTO;
import com.patientdatamanagement.hope.payloads.DoctorLoginDTO;
import com.patientdatamanagement.hope.service.DoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins="http://localhost:3000")
public class DoctorController {

	@Autowired
	DoctorService doctorService;

	@PostMapping("/signUp")
	public ResponseEntity<?> addDoctor(@RequestBody DoctorsInfo doctor) {
		//API Working
		try {
		DoctorsInfo savedDoctor = this.doctorService.addDoctorInfo(doctor);
		return new ResponseEntity<DoctorsInfo>(savedDoctor, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/signIn")
	public ResponseEntity<?> authenticateDoctor(@RequestBody DoctorLoginDTO doctordto) {
		//API working
		try {
		DoctorDTO registeredDoctor = this.doctorService.authenticateDoctor(doctordto.getIdNo(), doctordto.getPassword());
		System.out.println(registeredDoctor.getUIDAINo());
		return new ResponseEntity<DoctorDTO>(registeredDoctor, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		}
	}
	
	@GetMapping("/getDoctor/{id}")
	public ResponseEntity<?> getDoctor(@PathVariable String id){
		//API working
		try {
			DoctorDTO savedDoctor = this.doctorService.getDoctorInfo(id);
			System.out.println(savedDoctor.getUIDAINo());
			return new ResponseEntity<DoctorDTO>(savedDoctor, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND); 
		}
			
		
	}
}
