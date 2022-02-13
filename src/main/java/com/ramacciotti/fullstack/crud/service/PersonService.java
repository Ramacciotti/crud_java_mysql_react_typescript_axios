package com.ramacciotti.fullstack.crud.service;

import com.ramacciotti.fullstack.crud.model.Person;
import com.ramacciotti.fullstack.crud.repository.PersonRepository;
import com.ramacciotti.fullstack.crud.vo.PersonVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PersonService {

    private final PersonRepository userRepository;

    @Transactional
    public PersonVO createUser(PersonVO personVO) {

        Person person = new Person()
                .withName(personVO.getName())
                .withCpf(personVO.getCpf());

        person = userRepository.save(person);

        return new PersonVO(person);

    }

    @Transactional
    public PersonVO updateUser(Long id, PersonVO userVO) {

        Optional<Person> user = userRepository.findById(id);

        if(userVO.getName() != null){
            user.get().setName(userVO.getName());
        }

        if(userVO.getCpf() != null){
            user.get().setCpf(userVO.getCpf());
        }

        return new PersonVO(user.get());

    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public List<PersonVO> findPeople(){

        List<Person> people = userRepository.findAll();

        return PersonVO.convertToVO(people);

    }

}
