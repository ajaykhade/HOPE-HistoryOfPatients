package com.patientdatamanagement.hope.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.patientdatamanagement.hope.entities.DoctorsInfo;

public interface DoctorsRepo extends JpaRepository<DoctorsInfo, String> {

	@Query(value = "select * from doctor_info where uidai_no = :id and password = :password", nativeQuery = true)
	DoctorsInfo findByUIDAINoAndPassword(@Param("id") String id, @Param("password") String password);
}
