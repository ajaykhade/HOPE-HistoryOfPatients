package com.patientdatamanagement.hope.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.patientdatamanagement.hope.entities.Medicines;

public interface MedicinesRepo extends JpaRepository<Medicines, Long> {

	@Query("select m from Medicines m where m.prescriptionId = id order by m.id")
	List<Medicines> findAllByPrescriptionId(long id);
}
