package com.learn.learn001.entity;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.List;

/**
 * Created by liujunbin on 17/6/9.
 */

@Entity
@Table(name = "permissions")
public class Permissions implements GrantedAuthority {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;


    @ManyToMany
    @JoinTable(name = "roles_permissions" , joinColumns = {
            @JoinColumn(name = "roles_id" , referencedColumnName = "id")
    },inverseJoinColumns = {
            @JoinColumn(name = "permissions_id" , referencedColumnName = "id")
    })
    private List<Roles> roles;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getAuthority() {
        return getName();

    }

    public Permissions(){}

    public Permissions(String name) {
        this.name = name;
    }

}
