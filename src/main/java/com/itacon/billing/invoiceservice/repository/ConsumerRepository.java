package com.itacon.billing.invoiceservice.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.itacon.billing.invoiceservice.model.Consumer;

@RepositoryRestResource
public interface ConsumerRepository extends CrudRepository<Consumer, Long>{
}
