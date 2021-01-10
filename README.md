# api_graphql_express_nodejs

My first api in nodejs with graphql and express.

In this API you can allow to manage clients.

## Technologies and packages used for development

- Node.js
- Express
- MySQL
- dotenv (for managing environment variables)
- express-graphql and graphql

# Getting Started

This README.md will guide you on how to install and use this API.

## Installation and initialization

### Clone the repository or download the zip:

```bash
$ git clone https://github.com/leidymgdev/api_graphql_express_nodejs.git
```

## To install the dependencies

Use **npm** or **yarn** to install the dependencies.

```bash
$ npm install
```

```bash
$ yarn install
```

## Dependencies used

```json
"dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-graphql": "^0.12.0",
    "graphql": "^15.4.0"
  }
```

## Initialize the server

```bash
cd server
npm start
```

If everything is ok you will get the next messages:

- _"API running on port 8081 in environment development"_

## Checking if it's running correctly

Open this [url](http://localhost:8081/graphql) in the browser.

You should get the GraphiQL IDE and look the documentation explorer about queries and moutations.
