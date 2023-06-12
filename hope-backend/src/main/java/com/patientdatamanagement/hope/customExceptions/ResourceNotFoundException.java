package com.patientdatamanagement.hope.customExceptions;

public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(String mesg, String id, Long userid) {
		super(mesg + " with " + id + " = " + userid + " not found.");
	}
	
	public ResourceNotFoundException(String mesg, String email, String emailid) {
		super(mesg + " with " + email + " = " + emailid + " not found.");
	}

	public ResourceNotFoundException(String mesg, String mesg1, String id1, String mesg2, String id2) {
		super(mesg + " with " + mesg1 + " = " + id1 + " and " + mesg2 + " = " + id2 + " is not found");
	}
	
}
