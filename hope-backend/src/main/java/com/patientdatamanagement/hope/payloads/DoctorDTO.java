package com.patientdatamanagement.hope.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DoctorDTO {

	private String UIDAINo;
	private String name;
	private String hospitalName;
	private String certificateNo;
	private long contactNo;
	private String address;
}
