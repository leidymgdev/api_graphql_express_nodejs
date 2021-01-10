if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const JSON_ENV_VARIABLES = require("./env.variables.json");
const NODE_ENV = process.env.NODE_ENV || "development";
const ENV_VARIABLES = JSON_ENV_VARIABLES[NODE_ENV];

module.exports = {
    ENVIRONMENT: ENV_VARIABLES.ENVIRONMENT,
    PORT: ENV_VARIABLES.PORT || 8080,
};