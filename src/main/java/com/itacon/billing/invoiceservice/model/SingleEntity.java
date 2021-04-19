package com.itacon.billing.invoiceservice.model;

import javax.persistence.Column;

public class SingleEntity {
	@Column(name = "nif")
	private String nif;
	@Column(name = "consumidor_ativo")
	private boolean isActive;
	@Column(name = "bi")
	private String identification;
	@Column(name = "prenomes")
	private String firstname;
	@Column(name = "sobrenomes")
	private String lastname;
}
