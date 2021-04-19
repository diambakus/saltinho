package com.itacon.billing.invoiceservice.model;

import javax.persistence.Embeddable;

import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
public class Address {
	private String street;
	private String number;
	private String city;
	private String zipcode;
	private String country;
	private String district;
	private String description;
}
