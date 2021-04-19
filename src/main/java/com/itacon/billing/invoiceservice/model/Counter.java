package com.itacon.billing.invoiceservice.model;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "contador")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Counter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "numero_referencia")
	private String refnumber;
	@Column(name = "descricao")
	private String description;
	@Column(name = "data_de_instalacao")
	private Long installationDate;
	@Column(name = "tipo_contador")
	private Integer type;
	@Embedded
	private Address address;
	@Column(name = "status")
	private Short status;
}
