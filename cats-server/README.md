# Adonis API

Este é o padrão para a criação de um servidor API no AdonisJs, vem pré-configurado com
1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

faça o clone desse repositorio , dentro da pasta execute
```bash
npm install 
```


## DB
Consulte o manual do adonisJS para instalar um drive de banco que queira.s

### Migrations

Execute todas as migrações do projeto

```js
adonis migration:run
```
# Lembre-se de ter em sua maquina o adonisJS instalado junto com o gerciador de pacotes.
antes de iniciar o projeto , confira se você tem um arquivo de .env 
```bash
source .env
```
caso não tenha crie um usando o .env.exemple como base.
