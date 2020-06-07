# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
# Lembre-se de tem em sua maquina o adonisJS instalado junto com o gerciador de pacotes.
antes de iniciar o projeto , confira se você tem um arquivo de .env 
```bash
source .env
```
caso não tenha crie um usando o .env.exemple 
