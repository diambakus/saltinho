package com.itacon.billing.invoiceservice.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itacon.billing.invoiceservice.model.Reading;
import com.itacon.billing.invoiceservice.repository.ReadingRepository;

@Service
public class ReadingServiceImpl implements ReadingService {

	private ReadingRepository readingRepository;

	@Autowired
	public ReadingServiceImpl(ReadingRepository readingRepository) {
		this.readingRepository = readingRepository;
	}

	@Override
	public Reading persist(Reading reading) {
		return readingRepository.save(reading);
	}

	@Override
	public List<Reading> readings(long id) {
		return StreamSupport.stream(readingRepository.findAll().spliterator(), true)
				.filter(r -> r.getCounter().getId() == id).collect(Collectors.toList());
	}
}
