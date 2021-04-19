package com.itacon.billing.invoiceservice.service;

import java.util.List;
import java.util.Optional;

import com.itacon.billing.invoiceservice.model.Counter;

public interface CounterService {
	public List<Counter> all();
	public Counter persist(Counter counter);
	public Optional<Counter> getById(long id);
}
