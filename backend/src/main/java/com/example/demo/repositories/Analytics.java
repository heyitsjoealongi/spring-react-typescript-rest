package com.example.demo.repositories;

import com.example.demo.models.Analytic;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

// This will be AUTO IMPLEMENTED by Spring into a Bean called database
// CRUD refers Create, Read, Update, Delete

public interface Analytics extends CrudRepository<Analytic, Integer> {

}