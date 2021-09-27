# TreeFall-Backend

## Requisitos

- [Node.js](https://nodejs.org/en/) - LTS
- [Postgres](https://www.postgresql.org/download/) - v. 13.x
- [Docker](https://www.docker.com/)

Como executar

```bash
$ docker run --name treefall -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Copie o conteudo do arquivo `.env.example` para dentro de um novo arquivo `.env.dev`

Faça as modificações necessaria para seu ambiente, como:

- Nome do banco de dados
- Porta de acesso do banco de dados
- Usuário de acesso do banco de dados
- Senha de acesso do banco de dados

```bash
npm install

npm run typeorm migration:run

npm run dev
```
