const jwks = require("./staging_keypair.json");

const lambdaHandler = async (event, context) => {
  return jwks;
};

exports.lambdaHandler = lambdaHandler;
