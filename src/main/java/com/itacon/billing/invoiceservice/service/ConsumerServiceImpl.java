package com.itacon.billing.invoiceservice.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itacon.billing.invoiceservice.model.Consumer;
import com.itacon.billing.invoiceservice.repository.ConsumerRepository;

@Service
public class ConsumerServiceImpl implements ConsumerService{
	
	private ConsumerRepository consumerRepository;
	
	@Autowired
	public ConsumerServiceImpl(ConsumerRepository consumerRepository) {
		this.consumerRepository = consumerRepository;
	}

	@Override
	public List<Consumer> all() {
		return StreamSupport.stream(consumerRepository.findAll().spliterator(), false).collect(Collectors.toList());
	}

	@Override
	public Consumer persist(Consumer consumer) {
		return consumerRepository.save(consumer);
	}

	@Override
	public Consumer getById(long id) {
		return consumerRepository.findById(id).get();
	}
}
