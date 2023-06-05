CREATE TABLE table1 (
    id SERIAL PRIMARY KEY,
    numeric_field NUMERIC,
    varchar_field VARCHAR,
    date_field DATE,
    integer_field INTEGER,
    foreign_key_field INTEGER REFERENCES table2(id)
);

CREATE TABLE table2 (
    id SERIAL PRIMARY KEY,
    numeric_field NUMERIC,
    varchar_field VARCHAR,
    date_field DATE,
    integer_field INTEGER,
    foreign_key_field INTEGER REFERENCES table1(id)
);

-- Вставка данных в таблицу table1
INSERT INTO table1 (numeric_field, varchar_field, date_field, integer_field, foreign_key_field)
VALUES (1.23, 'значение1', '2023-01-01', 42, 1),
       (4.56, 'значение2', '2023-02-01', 67, 2);

-- Вставка данных в таблицу table2
INSERT INTO table2 (numeric_field, varchar_field, date_field, integer_field, foreign_key_field)
VALUES (7.89, 'значение3', '2023-03-01', 91, 1),
       (0.12, 'значение4', '2023-04-01', 76, 2);
