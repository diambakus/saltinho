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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "leitura")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reading {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "data")
	private Long date;
	@Column(name = "valor")
	private BigDecimal value;
	@ManyToOne
	@JoinColumn(name = "f_contador")
	private Counter counter;
}
