package com.patientdatamanagement.hope.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "prescription")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Prescription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long prescriptionId;
	
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name = "doctor_id")
	private DoctorsInfo doctorId;
	
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name = "patient_id")
	private PatientInfo patientId;
	
	@Column(name = "prescription_date")
	private Date prescriptionDate;
	
	@Column(name = "blood_pressure")
	private double bloodPressure;
	
	@Column(name = "oxygen_level")
	private double oxygenLevel;
	
	private String diagnosis;
	
	@Column(name = "care_required")
	private String careRequired;
	
	@OneToMany(mappedBy = "prescriptionId", cascade = CascadeType.ALL)
	private List<Medicines> MedicineId;
}
