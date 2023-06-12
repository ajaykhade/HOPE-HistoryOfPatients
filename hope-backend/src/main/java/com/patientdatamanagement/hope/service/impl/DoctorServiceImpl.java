package com.patientdatamanagement.hope.service.impl;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patientdatamanagement.hope.customExceptions.ResourceNotFoundException;
import com.patientdatamanagement.hope.entities.DoctorsInfo;
import com.patientdatamanagement.hope.payloads.DoctorDTO;
import com.patientdatamanagement.hope.repository.DoctorsRepo;
import com.patientdatamanagement.hope.service.DoctorService;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	DoctorsRepo doctorRepo;

	@Override
	public DoctorsInfo addDoctorInfo(DoctorsInfo doctor) {
		
		DoctorsInfo savedDoctor = doctorRepo.save(doctor);
		
		return savedDoctor;
	}

	@Override
	public DoctorDTO getDoctorInfo(String doctorId) {
		
		DoctorsInfo doctor = doctorRepo.findById(doctorId).orElseThrow(() ->new ResourceNotFoundException("Doctor", "ID", doctorId));
		System.out.println(doctor.getUIDAINo());
		return this.modelMapper.map(doctor, DoctorDTO.class);
	}

	@Override
	public DoctorsInfo updateDoctorInfo(DoctorsInfo doctor, String doctorId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DoctorDTO authenticateDoctor(String doctorId, String password) {
		
		//System.out.println(doctorId);
		DoctorsInfo registeredDoctor = doctorRepo.findByUIDAINoAndPassword(doctorId, password);
		
		DoctorDTO doctordto =  this.modelMapper.map(registeredDoctor, DoctorDTO.class);
		System.out.println(doctordto.getUIDAINo());
		
		return doctordto;
	}

}
