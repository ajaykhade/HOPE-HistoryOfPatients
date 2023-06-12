package com.patientdatamanagement.hope.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="doctor_info")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DoctorsInfo {
	
	@Id
	@Column(name = "UIDAI_No", nullable = false, unique = true)
	@Length(min = 12, max = 12, message = "Invalid length of the ID")
	@JsonProperty("UIDAINo")
	private String UIDAINo;
	
	@Column(nullable = false)
	@Length(min = 3, max = 20, message = "Invalid length of the name")
	private String name;
	
	@Column(name = "hospital_Name")
	private String hospitalName;
	 
	@Column(name = "certificate_No", nullable = false)
	@Length(min = 8, max = 20, message = "Invalid length of the certificate Number")
	private String certificateNo;
	
	@Column(name = "contact_No", nullable = false)
	//@Length(min = 10, max = 13, message = "Invalid length of the contact number")
	private long contactNo;
	
	@Column(nullable = false)
	@Length(min = 2, max = 50, message = "Invalid length of the address")
	private String address;
	
	@Column(name = "password", nullable = false)
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid Password!")
	private String password;
	
	@OneToMany(mappedBy = "doctorId", cascade = CascadeType.ALL)
	private List<Prescription> prescriptionId;
}
