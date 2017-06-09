package com.learn.learn001.entity;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * Created by liujunbin on 17/6/9.
 */

@Entity
@Table
public class Roles implements Serializable, GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(unique = true)
    private String name;


    @ManyToMany
    @JoinTable(name = "roles_permissions", joinColumns = {
            @JoinColumn(name = "roles_id", referencedColumnName = "id")
    }, inverseJoinColumns = {@JoinColumn(name = "permissions_id", referencedColumnName = "id")}
    )
    private Set<Permissions> permissions;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getAuthority() {
        return getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Roles() {
    }

    public Roles(String name) {
        this.name = name;
    }
}
