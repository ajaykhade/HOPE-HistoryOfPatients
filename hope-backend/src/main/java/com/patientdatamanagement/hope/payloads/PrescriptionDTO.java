package com.patientdatamanagement.hope.payloads;

import java.util.List;

import com.patientdatamanagement.hope.entities.Medicines;
import com.patientdatamanagement.hope.entities.Prescription;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class PrescriptionDTO {

	private Prescription prescription;
	private String doctorId;
	private String patientId;
	private List<Medicines> medicinesList;
}
