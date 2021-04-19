package com.itacon.billing.invoiceservice.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itacon.billing.invoiceservice.model.Counter;
import com.itacon.billing.invoiceservice.repository.CounterRepository;

@Service
public class CounterServiceImpl implements CounterService {

	private CounterRepository counterRepository;

	@Autowired
	public CounterServiceImpl(CounterRepository counterRepository) {
		this.counterRepository = counterRepository;
	}

	@Override
	public Counter persist(Counter counter) {
		return counterRepository.save(counter);
	}

	@Override
	public List<Counter> all() {
		return StreamSupport.stream(counterRepository.findAll().spliterator(), false).collect(Collectors.toList());
	}

	@Override
	public Optional<Counter> getById(long id) {
		return counterRepository.findById(id);
	}
}
