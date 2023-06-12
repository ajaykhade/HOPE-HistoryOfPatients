package com.patientdatamanagement.hope.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "medicines")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Medicines {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long medicineId;
	
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name =  "prescriptionId")
	private Prescription prescriptionId;
	
	@Column(name = "medicine_name", nullable = false)
	@Length(min = 3, max = 50, message = "Invalid length of the medicine name")
	private String medicineName;
	
	@Column(nullable = false)
	private String quantity;
	
	@Column(nullable = false)
	private boolean morning;
	
	@Column(nullable = false)
	private boolean afternoon;
	
	@Column(nullable = false)
	private boolean evening;
	
	@Column(nullable = false)
	private boolean beforeLunch;
	
	@Column(nullable = false)
	private boolean afterLunch;
	
	@Column(name = "other_info")
	private String otherInfo;
	
}
