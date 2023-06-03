package com.springreacttypescriptrest.backend.repositories;

import com.springreacttypescriptrest.backend.models.Analytic;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called database
// CRUD refers Create, Read, Update, Delete

public interface Analytics extends CrudRepository<Analytic, Integer> {

}