# Rails-React-TypeScript-Docker Example ![backend_test](https://github.com/ohbarye/rails-react-typescript-docker-example/actions/workflows/backend_test.yml/badge.svg) ![frontend_test](https://github.com/ohbarye/rails-react-typescript-docker-example/actions/workflows/frontend_test.yml/badge.svg)

## TL;DR

**Here is an example application with the following modern web technology stacks. With this boilerplate, you can easily start to build your own app.**

- [Ruby](https://www.ruby-lang.org/en/) 3.0.0
- [Rails](https://rubyonrails.org/) 6.1.4
- [React.js](https://reactjs.org/) 17.0.1
- [TypeScript](https://www.typescriptlang.org/) 4.3.5
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) 11
- [GitHub Actions](https://github.com/features/actions)

## Usage

```shell
$ git clone https://github.com/ohbarye/rails-react-typescript-docker-example.git && cd rails-react-typescript-docker-example

# Setup
$ docker-compose run web yarn
$ docker-compose run backend bin/rails db:create db:migrate

# Start
$ docker-compose up -d

# View frontend
$ http://localhost:3000

# View backend
$ http://localhost:3001
```

## Further Details

### Backend

The combination, Rails + PostgreSQL + Docker Compose, is just a result I followed [Docker Compose's official instruction](https://docs.docker.com/compose/rails/).

### Frontend

It consist of very thin webpack settings, TypeScript config, and Jest.
