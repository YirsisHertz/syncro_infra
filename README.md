# Syncro Infra

Syncro Infra is the project infrastructure the Syncro Panel

## Specifications

This project is a REST API built with Node.js 20.10.0, Fastify and MongoDB

So keep in mind that it is necessary to configure a Mongo database

## Environments

`DATABASE_URL` : Here goes the mongo connection URL

`DATABASE_USERNAME` : Here goes the mongo username

`DATABASE_PASSWORD` : Here goes the mongo password

## Docker-compose Example

```
version: '3.9'
services:
    syncro-infra:
        image: 'yirsishertz/syncro-infra:latest'
        ports:
            - '3000:3000'
        environment:
            - PORT=3000
            - DATABASE_PASSWORD=example
            - DATABASE_USERNAME=root
            - DATABASE_URL=mongodb://mongo:27017/syncropanel?authSource=admin
        container_name: sincro-api
    mongo:
      image: mongo
      restart: always
      environment:
        MONGO_INITDB_ROOT_USERNAME: root
        MONGO_INITDB_ROOT_PASSWORD: example
    mongo-express:
      image: mongo-express
      restart: always
      ports:
        - 8081:8081
      environment:
        ME_CONFIG_MONGODB_ADMINUSERNAME: root
        ME_CONFIG_MONGODB_ADMINPASSWORD: example
        ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
```
