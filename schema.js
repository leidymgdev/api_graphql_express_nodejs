const { buildSchema } = require("graphql");

const clientSchema = buildSchema(`
    type Client {
        id: Int,
        name: String,
        phone: String
    }

    type Query {
        clients: [Client]
        client(id: Int): Client
    }

    type Mutation {
        createClient(name: String, phone: String): Client
    }
`);

module.exports = clientSchema;