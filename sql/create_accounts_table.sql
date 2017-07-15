CREATE TABLE public.accounts (
    id SERIAL PRIMARY KEY NOT NULL,
    account_number text NOT NULL,
    ssn text,
    branch text,
    employee text,
    account_open_date date
);

CREATE UNIQUE INDEX accounts_id_index ON public.accounts (id);

ALTER TABLE public.accounts
    OWNER to postgres;

