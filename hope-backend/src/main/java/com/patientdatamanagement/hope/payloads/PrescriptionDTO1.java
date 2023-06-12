package com.patientdatamanagement.hope.payloads;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class PrescriptionDTO1 {

	private long prescriptionId;
	private String doctorName;
	private String hospitalName;
	private String certificateNo;
	private long doctorContactNo;
	private String patientName;
	private String patientContactNo;
	private LocalDate patientdob;
	private String allergies;
	private String majorIssue;
	private Date prescriptionDate;
	private double bloodPressure;
	private double oxygenLevel;
	private String diagnosis;
	private String careRequired;
	private List<MedicinesDTO> medicines;
}
