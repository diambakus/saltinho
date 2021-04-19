package com.itacon.billing.invoiceservice.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "fatura")
@Data
public class Invoice {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@ManyToOne
	@JoinColumn(name = "cliente_consumidor_id")
	private Consumer consumer;
	@Column(name="data")
	private long issueDate;
	@Column(name = "numero_clientes_gerais")
	private BigDecimal generalNumber;
}
