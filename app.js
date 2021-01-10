const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { PORT, ENVIRONMENT } = require("./config");

const app = express();

const schema = require("./schema");
const clientController = require("./controller/client.controller");

// Function to resolve requests
const root = {
    welcome: () => "Welcome to Client Graphql Api.",
    getAllClients: () => clientController.getAll(),
    getClientById: (data) => clientController.getById(data),
    createClient: (data) => clientController.create(data),
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(PORT, () =>
    console.log(`API running on port ${PORT} in environment ${ENVIRONMENT}`)
);