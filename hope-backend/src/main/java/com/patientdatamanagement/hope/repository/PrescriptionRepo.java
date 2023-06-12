package com.patientdatamanagement.hope.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.patientdatamanagement.hope.entities.DoctorsInfo;
import com.patientdatamanagement.hope.entities.PatientInfo;
import com.patientdatamanagement.hope.entities.Prescription;

public interface PrescriptionRepo extends JpaRepository<Prescription, Long> {

	List<Prescription> findAllByDoctorIdAndPatientId(DoctorsInfo doctorId, PatientInfo patientId);
}
