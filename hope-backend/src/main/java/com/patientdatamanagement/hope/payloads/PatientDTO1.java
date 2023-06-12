package com.patientdatamanagement.hope.payloads;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PatientDTO1 {

	private String UIDAINo;
	private String name;
	private String contactNo;
	private LocalDate dob;
	private String allergies;
	private String majorIssue;

}
