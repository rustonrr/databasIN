create table accounts
(
	id serial not null
		constraint accounts_pkey
			primary key,
	account_number varchar,
	ssn varchar,
	branch varchar,
	employee varchar,
	account_open_date date,
	created_at timestamp not null,
	updated_at timestamp not null
);

INSERT INTO accounts 
(account_number, ssn, branch, employee, account_open_date, created_at, updated_at) 
VALUES ( '943591834', '536-55-8434', '0043', 'Kevin Hobbes', '07/06/2017', '07/07/2017', '07/07/2017');