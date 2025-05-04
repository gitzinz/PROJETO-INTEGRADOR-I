# 📦 Flora Accessories API

Esta é a API desenvolvida exclusivamente para um frontend de controle de estoque de produtos.

---

## ✅ Pré-requisitos

Antes de rodar este projeto, você precisa ter instalado:

- [Node.js v22.14.0](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
FLORA_ACCESSORIES_DB_HOST=localhost
FLORA_ACCESSORIES_DB_NAME=flora_accessories_db
FLORA_ACCESSORIES_DB_PASSWORD=postgres
FLORA_ACCESSORIES_DB_USER=postgres
FLORA_ACCESSORIES_DB_PORT=5432
```

## 🚀  Como rodar o projeto

```
# 0. Instale os módulos do projetro
    npm i

# 1. Suba o banco de dados com Docker Compose
docker-compose up -d

# 2. Execute as migrations
npm run migration:run

# 3. Inicie o projeto
npm run dev
```

## 🛠️ Tecnologias Utilizadas
- Node.js (v22.14.0)

- TypeScript

- Express

- TypeORM

- PostgreSQL

- Docker + Docker Compose

## 📝 Licença
#### Projeto desenvolvido exclusivamente para fins acadêmicos.



