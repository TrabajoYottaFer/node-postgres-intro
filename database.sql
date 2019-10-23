-- crear base de datos
create database library;

-- crear tabla
create table books
(
    section int,
    title text,
    author text
);

-- insertar datos
insert into books
values
    (1, 'foundation', 'Issac Asimov'),
    (2, 'Digital Fortress', 'Dan Brown'),
    (3, 'Worl war z', 'Max Brooks');


insert into books
values
    (2, 'Digital Fortress', 'Dan Brown'),
    (3, 'Worl war z', 'Max Brooks');


--EJEMPLOS
create table users
(
    usernam text,
    password text
);

insert into users
values
    ('joe', 'joe123'),
    ('ryan', 'ruyan123'),
    ('cameron', 'cameron123');