package com.itacon.billing.invoiceservice.model;

public enum CounterType {
	POWER(2), WATER(1);
	@SuppressWarnings("unused")
	private int type;
	
	CounterType(int type) {
		this.type = type;
	}
}
