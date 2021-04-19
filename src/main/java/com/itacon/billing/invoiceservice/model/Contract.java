package com.itacon.billing.invoiceservice.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "contrato")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contract {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "numero_contrato")
	private BigDecimal number;
	@Column(name = "data_assinatura")
	private Long creationDate;
	@ManyToOne
	@JoinColumn(name = "f_consumidor")
	private Consumer consumer;
	@OneToOne
	@JoinColumn(name = "f_counter")
	private Counter counter;
	@Column(name = "status")
	private Short status;
}
