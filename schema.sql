
SET check_function_bodies = false;
--
-- Definition for type status (OID = 129306) : 
--
SET search_path = public, pg_catalog;
CREATE TYPE public.status AS ENUM
  ( 'enabled', 'disabled' );
--
-- Definition for sequence catalog_category_id_seq (OID = 129384) : 
--
CREATE SEQUENCE public.catalog_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_category (OID = 129386) : 
--
CREATE TABLE public.catalog_category (
    id integer DEFAULT nextval('catalog_category_id_seq'::regclass) NOT NULL,
    parent_id integer DEFAULT 0 NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    modified_on timestamp without time zone DEFAULT now() NOT NULL,
    status status DEFAULT 'enabled'::status NOT NULL
) WITHOUT OIDS;
--
-- Definition for sequence locale_language_id_seq (OID = 129397) : 
--
CREATE SEQUENCE public.locale_language_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table locale_language (OID = 129399) : 
--
CREATE TABLE public.locale_language (
    id integer DEFAULT nextval('locale_language_id_seq'::regclass) NOT NULL,
    code character varying(3) NOT NULL,
    language character varying(128) NOT NULL,
    locale character varying(5) NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.locale_language ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.locale_language ALTER COLUMN code SET STATISTICS 0;
ALTER TABLE ONLY public.locale_language ALTER COLUMN language SET STATISTICS 0;
ALTER TABLE ONLY public.locale_language ALTER COLUMN locale SET STATISTICS 0;
--
-- Definition for sequence locale_currency_id_seq (OID = 129408) : 
--
CREATE SEQUENCE public.locale_currency_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table locale_currency (OID = 129410) : 
--
CREATE TABLE public.locale_currency (
    id integer DEFAULT nextval('locale_currency_id_seq'::regclass) NOT NULL,
    code character varying(3) NOT NULL,
    title character varying(128) NOT NULL,
    format character varying(10),
    currency_precision smallint DEFAULT 2 NOT NULL,
    rate numeric(17,10) DEFAULT 1.0000 NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.locale_currency ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.locale_currency ALTER COLUMN code SET STATISTICS 0;
ALTER TABLE ONLY public.locale_currency ALTER COLUMN title SET STATISTICS 0;
ALTER TABLE ONLY public.locale_currency ALTER COLUMN format SET STATISTICS 0;
--
-- Definition for sequence catalog_product_manufacturer_id_seq (OID = 129441) : 
--
CREATE SEQUENCE public.catalog_product_manufacturer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_manufacturer (OID = 129443) : 
--
CREATE TABLE public.catalog_product_manufacturer (
    id integer DEFAULT nextval('catalog_product_manufacturer_id_seq'::regclass) NOT NULL,
    name character varying(128) NOT NULL,
    image character varying(255)
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_manufacturer ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_manufacturer ALTER COLUMN name SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_manufacturer ALTER COLUMN image SET STATISTICS 0;
--
-- Definition for sequence catalog_product_image_id_seq (OID = 129541) : 
--
CREATE SEQUENCE public.catalog_product_image_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_image (OID = 129543) : 
--
CREATE TABLE public.catalog_product_image (
    id integer DEFAULT nextval('catalog_product_image_id_seq'::regclass) NOT NULL,
    product_id integer NOT NULL,
    path character varying(255) DEFAULT ''::character varying NOT NULL,
    sort_order smallint DEFAULT 1 NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_image ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_image ALTER COLUMN product_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_image ALTER COLUMN path SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_image ALTER COLUMN sort_order SET STATISTICS 0;
--
-- Definition for sequence catalog_category_description_id_seq (OID = 129599) : 
--
CREATE SEQUENCE public.catalog_category_description_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_category_description (OID = 129601) : 
--
CREATE TABLE public.catalog_category_description (
    id integer DEFAULT nextval('catalog_category_description_id_seq'::regclass) NOT NULL,
    category_id integer NOT NULL,
    language_id integer NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    meta_title character varying(128) DEFAULT ''::character varying NOT NULL,
    meta_description text DEFAULT ''::text NOT NULL,
    meta_keyword text DEFAULT ''::text NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_category_description ALTER COLUMN category_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_category_description ALTER COLUMN name SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_category_description ALTER COLUMN description SET STATISTICS 0;
--
-- Definition for sequence catalog_product_manufacturer_title_id_seq (OID = 129653) : 
--
CREATE SEQUENCE public.catalog_product_manufacturer_title_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_manufacturer_title (OID = 129655) : 
--
CREATE TABLE public.catalog_product_manufacturer_title (
    id integer DEFAULT nextval('catalog_product_manufacturer_title_id_seq'::regclass) NOT NULL,
    manufacturer_id integer NOT NULL,
    language_id integer NOT NULL,
    title character varying(255) NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_manufacturer_title ALTER COLUMN manufacturer_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_manufacturer_title ALTER COLUMN language_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_manufacturer_title ALTER COLUMN title SET STATISTICS 0;
--
-- Definition for sequence catalog_product_description_id_seq (OID = 129695) : 
--
CREATE SEQUENCE public.catalog_product_description_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_description (OID = 129697) : 
--
CREATE TABLE public.catalog_product_description (
    id integer DEFAULT nextval('catalog_product_description_id_seq'::regclass) NOT NULL,
    product_id integer NOT NULL,
    language_id integer NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    short_description text DEFAULT ''::text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    meta_title character varying(128) DEFAULT ''::character varying NOT NULL,
    meta_description text DEFAULT ''::text NOT NULL,
    meta_keyword text DEFAULT ''::text NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_description ALTER COLUMN product_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_description ALTER COLUMN language_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_description ALTER COLUMN name SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_description ALTER COLUMN description SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_description ALTER COLUMN meta_title SET STATISTICS 0;
--
-- Definition for sequence catalog_product_image_title_id_seq (OID = 129741) : 
--
CREATE SEQUENCE public.catalog_product_image_title_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_image_title (OID = 129743) : 
--
CREATE TABLE public.catalog_product_image_title (
    id integer DEFAULT nextval('catalog_product_image_title_id_seq'::regclass) NOT NULL,
    image_id integer NOT NULL,
    language_id integer NOT NULL,
    title character varying(128) DEFAULT ''::character varying NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_image_title ALTER COLUMN image_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_image_title ALTER COLUMN language_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_image_title ALTER COLUMN title SET STATISTICS 0;
--
-- Definition for sequence catalog_product_id_seq (OID = 129789) : 
--
CREATE SEQUENCE public.catalog_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product (OID = 129791) : 
--
CREATE TABLE public.catalog_product (
    id integer DEFAULT nextval('catalog_product_id_seq'::regclass) NOT NULL,
    manufacturer_id integer NOT NULL,
    quantity numeric(15,4) DEFAULT 0.0000 NOT NULL,
    sku character varying(255),
    cost numeric(15,4) DEFAULT 0.0000 NOT NULL,
    price numeric(15,4) DEFAULT 0.0000 NOT NULL,
    date_available date,
    weight numeric(10,3) DEFAULT 0.000,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    modified_on timestamp without time zone DEFAULT now() NOT NULL,
    new_from date,
    new_to date,
    featured_from date,
    featured_to date,
    status status DEFAULT 'enabled'::status NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product ALTER COLUMN id SET STATISTICS 0;
--
-- Definition for type modify (OID = 129829) : 
--
CREATE TYPE public.modify AS ENUM
  ( 'to', 'by', 'percent' );
--
-- Definition for sequence catalog_product_attribute_id_seq (OID = 129836) : 
--
CREATE SEQUENCE public.catalog_product_attribute_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_attribute (OID = 129838) : 
--
CREATE TABLE public.catalog_product_attribute (
    id integer DEFAULT nextval('catalog_product_attribute_id_seq'::regclass) NOT NULL,
    product_id integer NOT NULL,
    variation_id integer DEFAULT 0,
    option_id integer,
    option_value_id integer,
    price numeric(15,4),
    price_type modify,
    weight numeric(10,3),
    weight_type modify
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_attribute ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute ALTER COLUMN product_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute ALTER COLUMN variation_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute ALTER COLUMN option_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute ALTER COLUMN option_value_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute ALTER COLUMN price SET STATISTICS 0;
--
-- Definition for sequence catalog_product_attribute_value_id_seq (OID = 129873) : 
--
CREATE SEQUENCE public.catalog_product_attribute_value_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table catalog_product_attribute_value (OID = 129875) : 
--
CREATE TABLE public.catalog_product_attribute_value (
    id integer DEFAULT nextval('catalog_product_attribute_value_id_seq'::regclass) NOT NULL,
    product_attribute_id integer NOT NULL,
    language_id integer NOT NULL,
    attribute_value text NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_attribute_value ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute_value ALTER COLUMN language_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_attribute_value ALTER COLUMN attribute_value SET STATISTICS 0;
--
-- Structure for table catalog_product_category (OID = 129896) : 
--
CREATE TABLE public.catalog_product_category (
    category_id integer NOT NULL,
    product_id integer NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.catalog_product_category ALTER COLUMN category_id SET STATISTICS 0;
ALTER TABLE ONLY public.catalog_product_category ALTER COLUMN product_id SET STATISTICS 0;
--
-- Definition for sequence users_id_seq (OID = 129913) : 
--
CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table auth_users (OID = 129915) : 
--
CREATE TABLE public.auth_users (
    id integer DEFAULT nextval('users_id_seq'::regclass) NOT NULL,
    email character varying(127) NOT NULL,
    username character varying(32) DEFAULT ''::character varying NOT NULL,
    password character varying(50) NOT NULL,
    is_active smallint DEFAULT 1 NOT NULL,
    logins integer DEFAULT 0 NOT NULL,
    last_login integer
) WITHOUT OIDS;
ALTER TABLE ONLY public.auth_users ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.auth_users ALTER COLUMN email SET STATISTICS 0;
ALTER TABLE ONLY public.auth_users ALTER COLUMN username SET STATISTICS 0;
ALTER TABLE ONLY public.auth_users ALTER COLUMN password SET STATISTICS 0;
ALTER TABLE ONLY public.auth_users ALTER COLUMN is_active SET STATISTICS 0;
ALTER TABLE ONLY public.auth_users ALTER COLUMN logins SET STATISTICS 0;
ALTER TABLE ONLY public.auth_users ALTER COLUMN last_login SET STATISTICS 0;
--
-- Definition for sequence user_tokens_id_seq (OID = 129926) : 
--
CREATE SEQUENCE public.user_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
--
-- Structure for table auth_user_tokens (OID = 129928) : 
--
CREATE TABLE public.auth_user_tokens (
    id integer DEFAULT nextval('user_tokens_id_seq'::regclass) NOT NULL,
    user_id integer NOT NULL,
    user_agent character varying(40) NOT NULL,
    token character varying(32) NOT NULL,
    created integer NOT NULL,
    expires integer NOT NULL
) WITHOUT OIDS;
ALTER TABLE ONLY public.auth_user_tokens ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY public.auth_user_tokens ALTER COLUMN user_id SET STATISTICS 0;
ALTER TABLE ONLY public.auth_user_tokens ALTER COLUMN user_agent SET STATISTICS 0;
ALTER TABLE ONLY public.auth_user_tokens ALTER COLUMN token SET STATISTICS 0;
ALTER TABLE ONLY public.auth_user_tokens ALTER COLUMN created SET STATISTICS 0;
ALTER TABLE ONLY public.auth_user_tokens ALTER COLUMN expires SET STATISTICS 0;
--
-- Definition for index catalog_category_idx (OID = 129396) : 
--
CREATE INDEX catalog_category_idx ON catalog_category USING btree (parent_id);
--
-- Definition for index locale_language_idx (OID = 129406) : 
--
CREATE UNIQUE INDEX locale_language_idx ON locale_language USING btree (code);
--
-- Definition for index locale_currency_idx (OID = 129427) : 
--
CREATE UNIQUE INDEX locale_currency_idx ON locale_currency USING btree (code);
--
-- Definition for index catalog_category_description_idx (OID = 129625) : 
--
CREATE INDEX catalog_category_description_idx ON catalog_category_description USING btree (category_id);
--
-- Definition for index catalog_category_description_idx1 (OID = 129626) : 
--
CREATE INDEX catalog_category_description_idx1 ON catalog_category_description USING btree (language_id);
--
-- Definition for index catalog_product_manufacturer_title_idx (OID = 129671) : 
--
CREATE INDEX catalog_product_manufacturer_title_idx ON catalog_product_manufacturer_title USING btree (manufacturer_id);
--
-- Definition for index catalog_product_manufacturer_title_idx1 (OID = 129672) : 
--
CREATE INDEX catalog_product_manufacturer_title_idx1 ON catalog_product_manufacturer_title USING btree (language_id);
--
-- Definition for index catalog_product_description_idx (OID = 129712) : 
--
CREATE INDEX catalog_product_description_idx ON catalog_product_description USING btree (product_id);
--
-- Definition for index catalog_product_description_idx1 (OID = 129713) : 
--
CREATE INDEX catalog_product_description_idx1 ON catalog_product_description USING btree (language_id);
--
-- Definition for index catalog_product_image_title_idx (OID = 129760) : 
--
CREATE INDEX catalog_product_image_title_idx ON catalog_product_image_title USING btree (image_id);
--
-- Definition for index catalog_product_image_title_idx1 (OID = 129761) : 
--
CREATE INDEX catalog_product_image_title_idx1 ON catalog_product_image_title USING btree (language_id);
--
-- Definition for index catalog_product_idx1 (OID = 129804) : 
--
CREATE INDEX catalog_product_idx1 ON catalog_product USING btree (manufacturer_id);
--
-- Definition for index catalog_product_attribute_value_idx (OID = 129889) : 
--
CREATE INDEX catalog_product_attribute_value_idx ON catalog_product_attribute_value USING btree (language_id);
--
-- Definition for index catalog_product_attribute_value_idx1 (OID = 129895) : 
--
CREATE INDEX catalog_product_attribute_value_idx1 ON catalog_product_attribute_value USING btree (product_attribute_id);
--
-- Definition for index catalog_product_category_idx1 (OID = 129912) : 
--
CREATE INDEX catalog_product_category_idx1 ON catalog_product_category USING btree (product_id);
--
-- Definition for index user_tokens_idx (OID = 129939) : 
--
CREATE INDEX user_tokens_idx ON auth_user_tokens USING btree (user_id);
--
-- Definition for index catalog_category_pkey (OID = 129394) : 
--
ALTER TABLE ONLY catalog_category
    ADD CONSTRAINT catalog_category_pkey
    PRIMARY KEY (id);
--
-- Definition for index locale_language_pkey (OID = 129403) : 
--
ALTER TABLE ONLY locale_language
    ADD CONSTRAINT locale_language_pkey
    PRIMARY KEY (id);
--
-- Definition for index locale_currency_pkey (OID = 129415) : 
--
ALTER TABLE ONLY locale_currency
    ADD CONSTRAINT locale_currency_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_manufacturer_pkey (OID = 129447) : 
--
ALTER TABLE ONLY catalog_product_manufacturer
    ADD CONSTRAINT catalog_product_manufacturer_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_image_pkey (OID = 129549) : 
--
ALTER TABLE ONLY catalog_product_image
    ADD CONSTRAINT catalog_product_image_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_category_description_pkey (OID = 129613) : 
--
ALTER TABLE ONLY catalog_category_description
    ADD CONSTRAINT catalog_category_description_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_category_description_fk (OID = 129615) : 
--
ALTER TABLE ONLY catalog_category_description
    ADD CONSTRAINT catalog_category_description_fk
    FOREIGN KEY (language_id) REFERENCES locale_language(id) ON DELETE CASCADE;
--
-- Definition for index catalog_category_description_fk1 (OID = 129620) : 
--
ALTER TABLE ONLY catalog_category_description
    ADD CONSTRAINT catalog_category_description_fk1
    FOREIGN KEY (category_id) REFERENCES catalog_category(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_manufacturer_title_pkey (OID = 129659) : 
--
ALTER TABLE ONLY catalog_product_manufacturer_title
    ADD CONSTRAINT catalog_product_manufacturer_title_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_manufacturer_title_fk (OID = 129661) : 
--
ALTER TABLE ONLY catalog_product_manufacturer_title
    ADD CONSTRAINT catalog_product_manufacturer_title_fk
    FOREIGN KEY (manufacturer_id) REFERENCES catalog_product_manufacturer(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_manufacturer_title_fk1 (OID = 129666) : 
--
ALTER TABLE ONLY catalog_product_manufacturer_title
    ADD CONSTRAINT catalog_product_manufacturer_title_fk1
    FOREIGN KEY (language_id) REFERENCES locale_language(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_description_pkey (OID = 129710) : 
--
ALTER TABLE ONLY catalog_product_description
    ADD CONSTRAINT catalog_product_description_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_description_fk1 (OID = 129720) : 
--
ALTER TABLE ONLY catalog_product_description
    ADD CONSTRAINT catalog_product_description_fk1
    FOREIGN KEY (language_id) REFERENCES locale_language(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_image_title_pkey (OID = 129748) : 
--
ALTER TABLE ONLY catalog_product_image_title
    ADD CONSTRAINT catalog_product_image_title_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_image_title_fk (OID = 129750) : 
--
ALTER TABLE ONLY catalog_product_image_title
    ADD CONSTRAINT catalog_product_image_title_fk
    FOREIGN KEY (image_id) REFERENCES catalog_product_image(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_image_title_fk1 (OID = 129755) : 
--
ALTER TABLE ONLY catalog_product_image_title
    ADD CONSTRAINT catalog_product_image_title_fk1
    FOREIGN KEY (language_id) REFERENCES locale_language(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_idx (OID = 129802) : 
--
ALTER TABLE ONLY catalog_product
    ADD CONSTRAINT catalog_product_idx
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_fk (OID = 129806) : 
--
ALTER TABLE ONLY catalog_product
    ADD CONSTRAINT catalog_product_fk
    FOREIGN KEY (manufacturer_id) REFERENCES catalog_product_manufacturer(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_attribute_pkey (OID = 129843) : 
--
ALTER TABLE ONLY catalog_product_attribute
    ADD CONSTRAINT catalog_product_attribute_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_attribute_fk (OID = 129845) : 
--
ALTER TABLE ONLY catalog_product_attribute
    ADD CONSTRAINT catalog_product_attribute_fk
    FOREIGN KEY (product_id) REFERENCES catalog_product(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_attribute_value_pkey (OID = 129882) : 
--
ALTER TABLE ONLY catalog_product_attribute_value
    ADD CONSTRAINT catalog_product_attribute_value_pkey
    PRIMARY KEY (id);
--
-- Definition for index catalog_product_attribute_value_fk (OID = 129884) : 
--
ALTER TABLE ONLY catalog_product_attribute_value
    ADD CONSTRAINT catalog_product_attribute_value_fk
    FOREIGN KEY (language_id) REFERENCES locale_language(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_attribute_value_fk1 (OID = 129890) : 
--
ALTER TABLE ONLY catalog_product_attribute_value
    ADD CONSTRAINT catalog_product_attribute_value_fk1
    FOREIGN KEY (product_attribute_id) REFERENCES catalog_product_attribute(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_category_idx (OID = 129899) : 
--
ALTER TABLE ONLY catalog_product_category
    ADD CONSTRAINT catalog_product_category_idx
    PRIMARY KEY (category_id, product_id);
--
-- Definition for index catalog_product_category_fk (OID = 129901) : 
--
ALTER TABLE ONLY catalog_product_category
    ADD CONSTRAINT catalog_product_category_fk
    FOREIGN KEY (category_id) REFERENCES catalog_category(id) ON DELETE CASCADE;
--
-- Definition for index catalog_product_category_fk1 (OID = 129906) : 
--
ALTER TABLE ONLY catalog_product_category
    ADD CONSTRAINT catalog_product_category_fk1
    FOREIGN KEY (product_id) REFERENCES catalog_product(id) ON DELETE CASCADE;
--
-- Definition for index users_pkey (OID = 129922) : 
--
ALTER TABLE ONLY auth_users
    ADD CONSTRAINT users_pkey
    PRIMARY KEY (id);
--
-- Definition for index users_email_key (OID = 129924) : 
--
ALTER TABLE ONLY auth_users
    ADD CONSTRAINT users_email_key
    UNIQUE (email);
--
-- Definition for index user_tokens_pkey (OID = 129932) : 
--
ALTER TABLE ONLY auth_user_tokens
    ADD CONSTRAINT user_tokens_pkey
    PRIMARY KEY (id);
--
-- Definition for index user_tokens_fk (OID = 129934) : 
--
ALTER TABLE ONLY auth_user_tokens
    ADD CONSTRAINT user_tokens_fk
    FOREIGN KEY (user_id) REFERENCES auth_users(id) ON DELETE CASCADE;
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
