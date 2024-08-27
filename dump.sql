CREATE TABLE usuarios (
    email text primary key,
    'name' text not null,
    senha serial not null,
    'date' timestamp default now()
)