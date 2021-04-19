package com.itacon.billing.invoiceservice.service;

import java.util.List;

import com.itacon.billing.invoiceservice.model.Reading;

public interface ReadingService {
	public Reading persist(Reading reading);
	public List<Reading> readings(long id);
}
