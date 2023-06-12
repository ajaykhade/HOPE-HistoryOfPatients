package com.patientdatamanagement.hope.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Past;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "patient_info")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PatientInfo {

	@Id
	@Column(name = "UIDAI_No", nullable = false, unique = true)
	@Length(min = 12, max = 12, message = "Invalid length of the ID")
	@JsonProperty("UIDAINo")
	private String UIDAINo;
	
	@Column(nullable = false)
	@Length(min = 3, max = 20, message = "Invalid length of the name")
	private String name;
	
	@Column(name = "contact_No", nullable = false)
	@Length(min = 10, max = 13, message = "Invalid length of the contact Number")
	private String contactNo;
	
	@Column(name = "patient_dob", nullable = false)
	@Past(message = "dob must be in past")
	private LocalDate dob;
	
	private String allergies;
	
	@Column(name = "major_issue")
	private String majorIssue;
	
	@OneToMany(mappedBy = "patientId", cascade = CascadeType.ALL)
	private List<Prescription> prescriptionId;
}
