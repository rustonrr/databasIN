CREATE TABLE public.exceptions (
    id SERIAL PRIMARY KEY NOT NULL,
    exception text,
    account_number text NOT NULL,
    ssn text,
    branch text,
    employee text,
    account_open_date date,
    created_on date,
    reviewed_on date,
    resolution text
);

ALTER TABLE public.exceptions
    OWNER to postgres;

    