package com.ramacciotti.fullstack.crud.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@With
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "user")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String cpf;

}