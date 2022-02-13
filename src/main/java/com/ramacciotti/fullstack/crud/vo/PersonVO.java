package com.ramacciotti.fullstack.crud.vo;

import com.ramacciotti.fullstack.crud.model.Person;
import com.ramacciotti.person.model.*;
import com.sun.istack.NotNull;
import lombok.*;

import java.util.List;
import java.util.stream.Collectors;

@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PersonVO {

    @NotNull
    private String name;

    @NotNull
    private String cpf;

    public PersonVO(Person person) {
        this.name = person.getName();
        this.cpf = person.getCpf();
    }

    public static List<PersonVO> convertToVO(List<Person> person) {
        return person.stream().map(PersonVO::new).collect(Collectors.toList());
    }
}
