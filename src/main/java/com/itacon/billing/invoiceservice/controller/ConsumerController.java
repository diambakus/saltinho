package com.itacon.billing.invoiceservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itacon.billing.invoiceservice.model.Consumer;
import com.itacon.billing.invoiceservice.service.ConsumerService;


@RestController
@RequestMapping("/consumers")
@CrossOrigin("*")
public class ConsumerController {

	private ConsumerService consumerService;
	
	@Autowired
	public ConsumerController(ConsumerService consumerService) {
		this.consumerService = consumerService;
	}
	
	@GetMapping
	public ResponseEntity<?> getAll() {
		return ResponseEntity.ok(consumerService.all());
	}
	
	@PostMapping
	public ResponseEntity<?> add(@RequestBody Consumer consumer) {
		Consumer persisted = consumerService.persist(consumer);
		return ResponseEntity.ok(persisted);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Consumer consumer) {
		Consumer that = consumerService.getById(id);
		if (that == null)
			return ResponseEntity.noContent().build();
		else {
			Consumer updated = consumerService.persist(consumer);
			return ResponseEntity.ok(updated);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> get(@PathVariable("id") long id) {
		Consumer that = consumerService.getById(id);
		if (that == null)
			return ResponseEntity.noContent().build();
		return ResponseEntity.ok(that);
	}
}
