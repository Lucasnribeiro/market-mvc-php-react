PGDMP     5                    {            market    14.6    15.2 /    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16538    market    DATABASE     r   CREATE DATABASE market WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE market;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            �           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    5            �            1259    16549    product_types    TABLE     �   CREATE TABLE public.product_types (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    deleted_at timestamp without time zone
);
 !   DROP TABLE public.product_types;
       public         heap    postgres    false    5            �            1259    16548    product_types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.product_types_id_seq;
       public          postgres    false    5    212            �           0    0    product_types_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.product_types_id_seq OWNED BY public.product_types.id;
          public          postgres    false    211            �            1259    16556    products    TABLE     U  CREATE TABLE public.products (
    id integer NOT NULL,
    product_type_id integer,
    name character varying(50) NOT NULL,
    image character varying(255),
    price character varying(50) NOT NULL,
    tax character varying(50) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.products;
       public         heap    postgres    false    5            �            1259    16555    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    214    5            �           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    213            �            1259    16580    sale_products    TABLE     �   CREATE TABLE public.sale_products (
    id integer NOT NULL,
    sale_id integer,
    user_id integer,
    product_id integer,
    created_at timestamp without time zone NOT NULL,
    deleted_at timestamp without time zone
);
 !   DROP TABLE public.sale_products;
       public         heap    postgres    false    5            �            1259    16579    sale_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sale_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.sale_products_id_seq;
       public          postgres    false    218    5            �           0    0    sale_products_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.sale_products_id_seq OWNED BY public.sale_products.id;
          public          postgres    false    217            �            1259    16568    sales    TABLE     �   CREATE TABLE public.sales (
    id integer NOT NULL,
    user_id integer,
    tax character varying(50) NOT NULL,
    total character varying(50) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.sales;
       public         heap    postgres    false    5            �            1259    16567    sales_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.sales_id_seq;
       public          postgres    false    5    216            �           0    0    sales_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.sales_id_seq OWNED BY public.sales.id;
          public          postgres    false    215            �            1259    16540    users    TABLE     <  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(50),
    created_at timestamp without time zone NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false    5            �            1259    16539    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210    5            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            4           2604    16552    product_types id    DEFAULT     t   ALTER TABLE ONLY public.product_types ALTER COLUMN id SET DEFAULT nextval('public.product_types_id_seq'::regclass);
 ?   ALTER TABLE public.product_types ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            5           2604    16559    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            7           2604    16583    sale_products id    DEFAULT     t   ALTER TABLE ONLY public.sale_products ALTER COLUMN id SET DEFAULT nextval('public.sale_products_id_seq'::regclass);
 ?   ALTER TABLE public.sale_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            6           2604    16571    sales id    DEFAULT     d   ALTER TABLE ONLY public.sales ALTER COLUMN id SET DEFAULT nextval('public.sales_id_seq'::regclass);
 7   ALTER TABLE public.sales ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            3           2604    16543    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �          0    16549    product_types 
   TABLE DATA           J   COPY public.product_types (id, title, created_at, deleted_at) FROM stdin;
    public          postgres    false    212   u5       �          0    16556    products 
   TABLE DATA           h   COPY public.products (id, product_type_id, name, image, price, tax, created_at, deleted_at) FROM stdin;
    public          postgres    false    214   �5       �          0    16580    sale_products 
   TABLE DATA           a   COPY public.sale_products (id, sale_id, user_id, product_id, created_at, deleted_at) FROM stdin;
    public          postgres    false    218   	6       �          0    16568    sales 
   TABLE DATA           P   COPY public.sales (id, user_id, tax, total, created_at, deleted_at) FROM stdin;
    public          postgres    false    216   v6       �          0    16540    users 
   TABLE DATA           [   COPY public.users (id, name, username, password, role, created_at, deleted_at) FROM stdin;
    public          postgres    false    210   �6       �           0    0    product_types_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.product_types_id_seq', 1, true);
          public          postgres    false    211            �           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 2, true);
          public          postgres    false    213            �           0    0    sale_products_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.sale_products_id_seq', 12, true);
          public          postgres    false    217            �           0    0    sales_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.sales_id_seq', 2, true);
          public          postgres    false    215            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    209            =           2606    16554     product_types product_types_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.product_types
    ADD CONSTRAINT product_types_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.product_types DROP CONSTRAINT product_types_pkey;
       public            postgres    false    212            ?           2606    16561    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    214            C           2606    16585     sale_products sale_products_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.sale_products
    ADD CONSTRAINT sale_products_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.sale_products DROP CONSTRAINT sale_products_pkey;
       public            postgres    false    218            A           2606    16573    sales sales_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.sales DROP CONSTRAINT sales_pkey;
       public            postgres    false    216            9           2606    16545    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ;           2606    16547    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    210            F           2606    16591    sale_products fk_product_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.sale_products
    ADD CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES public.products(id);
 E   ALTER TABLE ONLY public.sale_products DROP CONSTRAINT fk_product_id;
       public          postgres    false    4159    218    214            D           2606    16562    products fk_product_type    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_product_type FOREIGN KEY (product_type_id) REFERENCES public.product_types(id);
 B   ALTER TABLE ONLY public.products DROP CONSTRAINT fk_product_type;
       public          postgres    false    212    214    4157            G           2606    16596    sale_products fk_sale_id    FK CONSTRAINT     w   ALTER TABLE ONLY public.sale_products
    ADD CONSTRAINT fk_sale_id FOREIGN KEY (sale_id) REFERENCES public.sales(id);
 B   ALTER TABLE ONLY public.sale_products DROP CONSTRAINT fk_sale_id;
       public          postgres    false    216    218    4161            E           2606    16574    sales fk_user_id    FK CONSTRAINT     o   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.users(id);
 :   ALTER TABLE ONLY public.sales DROP CONSTRAINT fk_user_id;
       public          postgres    false    216    4153    210            H           2606    16586    sale_products fk_user_id    FK CONSTRAINT     w   ALTER TABLE ONLY public.sale_products
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.sale_products DROP CONSTRAINT fk_user_id;
       public          postgres    false    218    210    4153            �   ,   x�3�t+*-I�4202�50�52P00�24�22������� ��X      �   H   x�3�4�tJ�B�?NCNcN##c]]#S+CS+��P�o����T� y
M-@
c���� X�      �   ]   x����� �7��P%���L��sT�?$�"�Nv$H���"��X��&5�N��V�-�q�2�u���t����?����������}�D�f#AP      �   ?   x�3�4�4�31�4"#c]]#S+C3+C�?.#�N4%F�V�� %1z\\\ �o�      �   �   x�e͹�0 �<+X~
7T@<���rh<h�� }z�����>�uF���兡���C:E��,'�0��^F�n�֠�`8�9q�c�n�yC���!���B:���
X��@'����������?���;�ȼ�.���]�UH��p��,^5���=�%ad/� ��A>G�I���=�     