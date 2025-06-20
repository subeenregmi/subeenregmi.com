\connect website
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    creation_date bigint NOT NULL,
    filepath VARCHAR(256) NOT NULL
);
