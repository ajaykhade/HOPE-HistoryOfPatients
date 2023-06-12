package com.patientdatamanagement.hope.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.patientdatamanagement.hope.entities.PatientInfo;

public interface PatientRepo extends JpaRepository<PatientInfo, String> {

	@Query(value = "select * from patient_info where uidai_no = :uidai and contact_no = :contactNo", nativeQuery = true)
	PatientInfo findByUIDAINoAndContactNo(@Param("uidai") String uidai, @Param("contactNo") String contactNo);
	
	PatientInfo findByUIDAINo(String uidai);
}
