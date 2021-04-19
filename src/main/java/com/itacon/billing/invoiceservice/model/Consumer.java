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
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "consumidor")
@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
public class Consumer extends Subject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Embedded
	private Tax tax;
	@Column(name = "consumidor_ativo")
	private Boolean isActive;
	@Column(name = "nascimento")
	private Long birthdate;
	@Embedded
	private Address address;
	@Column(name = "nome")
	private String fullname;
	@Column(name = "email")
	private String email;
	@Column(name = "telefone")
	private String telephone;
	@Column(name = "numero_referencia")
	private String reference;
}
