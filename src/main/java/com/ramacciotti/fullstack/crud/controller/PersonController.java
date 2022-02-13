package com.ramacciotti.fullstack.crud.controller;

import com.ramacciotti.fullstack.crud.service.PersonService;
import com.ramacciotti.fullstack.crud.vo.PersonVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@Slf4j
public class PersonController {

    private final PersonService personService;

    @PostMapping("/person")
    @ResponseStatus(HttpStatus.CREATED)
    public PersonVO postUser(@RequestBody PersonVO personVO){
        return personService.createUser(personVO);
    }

    @PutMapping("/person/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PersonVO putUserById(@PathVariable Long id, @RequestBody PersonVO personVO){
        return personService.updateUser(id, personVO);
    }

    @DeleteMapping("/person/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUserById(@PathVariable Long id){
        personService.deleteUser(id);
    }

    @GetMapping("/people")
    @ResponseStatus(HttpStatus.OK)
    public List<PersonVO> getUsers(){
        return personService.findPeople();
    }


}
