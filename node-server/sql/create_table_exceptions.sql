create table exceptions
(
	id serial not null
		constraint exceptions_pkey
			primary key,
    reason varchar,
    reviewed_on date,
    resolution varchar,
	account_number varchar,
	ssn varchar,
	branch varchar,
	employee varchar,
	account_open_date date,
	created_at timestamp not null,
	updated_at timestamp not null
);