CREATE TABLE users(
   id serial PRIMARY KEY,
   name VARCHAR ( 50 ) NOT NULL,
   username VARCHAR ( 50 ) UNIQUE NOT NULL,
   password VARCHAR ( 255 ) NOT NULL,
   role VARCHAR (50),
   created_at TIMESTAMP NOT NULL,
   deleted_at TIMESTAMP
);

CREATE TABLE product_types(
   id serial PRIMARY KEY,
   title VARCHAR ( 50 ) NOT NULL,
   created_at TIMESTAMP NOT NULL,
   deleted_at TIMESTAMP
);

CREATE TABLE products(
   id serial PRIMARY KEY,
   product_type_id INT,
   name VARCHAR ( 50 ) NOT NULL,
   image VARCHAR ( 255 ),
   price VARCHAR ( 50 ) NOT NULL,
   tax VARCHAR ( 50 ) NOT NULL,
   created_at TIMESTAMP NOT NULL,
   deleted_at TIMESTAMP NULL,
   constraint fk_product_type
   	foreign KEY(product_type_id)
   		references product_types(id)
);

CREATE TABLE sales(
   id serial PRIMARY KEY,
   user_id INT,
   tax VARCHAR ( 50 ) NOT NULL,
   total VARCHAR ( 50 ) NOT NULL,
   created_at TIMESTAMP NOT NULL,
   deleted_at TIMESTAMP NULL,
   constraint fk_user_id
   	foreign KEY(user_id)
   		references users(id)
);


CREATE TABLE sale_products(
   id serial PRIMARY KEY,
   sale_id INT,
   user_id INT,
   product_id INT,
   created_at TIMESTAMP NOT NULL,
   deleted_at TIMESTAMP NULL,
   constraint fk_user_id
   	foreign KEY(user_id)
   		references users(id)
   constraint fk_product_id
   	foreign KEY(product_id)
   		references products(id),
   constraint fk_sale_id
   	foreign KEY(sale_id)
   		references sales(id)
);