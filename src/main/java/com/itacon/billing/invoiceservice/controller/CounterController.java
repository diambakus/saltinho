package com.itacon.billing.invoiceservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itacon.billing.invoiceservice.model.Counter;
import com.itacon.billing.invoiceservice.model.Reading;
import com.itacon.billing.invoiceservice.service.CounterService;
import com.itacon.billing.invoiceservice.service.ReadingService;

@CrossOrigin("*")
@RestController
@RequestMapping("/counters")
public class CounterController {

	private CounterService counterService;
	private ReadingService readingService;

	@Autowired
	public CounterController(CounterService counterService, ReadingService readingService) {
		this.counterService = counterService;
		this.readingService = readingService;
	}

	@GetMapping
	public ResponseEntity<?> getAll() {
		List<Counter> counters = counterService.all();
		return ResponseEntity.ok(counters);
	}

	@PostMapping
	public ResponseEntity<?> add(@RequestBody Counter counter) {
		Counter persisted = counterService.persist(counter);
		return ResponseEntity.ok(persisted);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> get(@PathVariable("id") long id) {
		Optional<Counter> counter = counterService.getById(id);
		if (counter.isEmpty())
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok(counter);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Counter counter) {
		Counter that = counterService.getById(id).get();
		if (that == null)
			return ResponseEntity.notFound().build();
		else {
			counterService.persist(counter);
			return ResponseEntity.ok(HttpStatus.OK);
		}
	}

	@PostMapping("/{id}/readings")
	public ResponseEntity<?> addReading(@PathVariable("id") long id, @RequestBody Reading reading) {
		Counter counter = counterService.getById(id).orElse(null);
		if (counter == null)
			return ResponseEntity.notFound().build();
		else {
			reading.setCounter(counter);
			Reading persisted = readingService.persist(reading);
			return ResponseEntity.ok(persisted);
		}
	}

	@GetMapping("/{id}/readings")
	public ResponseEntity<?> getReadings(@PathVariable("id") long id) {
		return ResponseEntity.ok(readingService.readings(id));
	}
}
