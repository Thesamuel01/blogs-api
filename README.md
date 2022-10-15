# Blogs API

This is a project developed at Trybe's Back-End Module.

Blogs API is a web system developed to receive and response HTTP requests to manage users and their blog posts in a database.

# Summary
- [Blogs API](#blogs-api)
- [Summary](#summary)
- [Context](#context)
- [Technologies and Tools](#technologies-and-tools)
- [Notes](#notes)
- [Git and Commits](#git-github-and-commit-history)
- [Lint](#lint)
- [Installing and running the app](#installing-and-running-the-app)
- [Documentation](#documentation)

# Context
This API allows doing via HTTP requests:
 - Log in to System
 - Create, delete and find users
 - Create, delete, find and Update blog posts
 - Create and find categories

# Technologies and Tools
This project used the following technologies and tools:
  * __Node__ | [Javascript Runtime Environment](https://reactjs.org/docs/thinking-in-react.html)
  * __Express__ | [Web Framework for NodeJS](https://redux-toolkit.js.org/introduction/getting-started)
  * __Hapi/Boom__ | [HTTP Error Objects](https://hapi.dev/module/boom/) 
  * __Joi__ | [Data Validation](https://joi.dev/api/?v=17.6.0) 
  * __Sequelize__ | [Object–relational Mapping](https://sequelize.org/docs/v6/getting-started/) 
  * __BcryptJS__ | [Password Hashing](https://github.com/dcodeIO/bcrypt.js) 
  * __Swagger__ | [API Documentation](https://swagger.io/resources/open-api/) 

# Notes
### Git, GitHub and Commit History
- This project used the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) with some types from [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Lint
- The project was developed following the Clean Code standards specified by [Trybe's Lint](https://github.com/betrybe/eslint-config-trybe).

### Files
 - The Dorckerfile, .sequelizerc, docker-compose.yml were made available by Trybe.


# Installing and running the app

## Running without docker
\* __To run this app without docker you need a running MYSQL server.__

### Enter into project directory
```
cd blogs-api
```
### Set environment variables

Set your environment variables in .env.example file according to your development environment and then change its name to .env
```
#### SERVER VARS
NODE_ENV=
API_PORT=

#### DATABASE VARS
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DB_NAME=
MYSQL_USER=
MYSQL_PASSWORD=

#### SECRECT VARS
JWT_SECRET=
```

### Install project dependencies
```
npm install
```

### Run node server.
```
npm start
```

## Running with docker

### Build docker containers and their network.
```
cd blogs-api
docker-compose up -d
```
### Entering into bash terminal from Node container.
```
docker exec -it blogs_api bash
```

### Install project dependencies
```
npm install
```

### Run node server.
```
npm start
```

# Documentation
 - [API documentation](https://thesamuel01.github.io/blogs-api/)
