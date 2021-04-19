package com.itacon.billing.invoiceservice.model;

import javax.persistence.Column;

public class CollectiveEntity {
	@Column(name = "nipc")
	private String nipc;
	@Column(name = "nome_coletivo")
	private String fullname;
}
