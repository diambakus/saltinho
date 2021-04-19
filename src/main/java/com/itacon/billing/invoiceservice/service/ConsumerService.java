package com.itacon.billing.invoiceservice.service;

import java.util.List;

import com.itacon.billing.invoiceservice.model.Consumer;

public interface ConsumerService {
	List<Consumer> all();
	Consumer persist(Consumer consumer);
	Consumer getById(long id);
}
