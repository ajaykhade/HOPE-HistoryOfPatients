package com.patientdatamanagement.hope.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class MedicinesDTO {

	private long medicineId;
	private String medicineName;
	private String quantity;
	private boolean morning;
	private boolean afternoon;
	private boolean evening;
	private boolean beforeLunch;
	private boolean afterLunch;
	private String otherInfo;

}
