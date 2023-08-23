'use strict';

const jose = require('node-jose');
const crypto = require('crypto');

let response

// Function to generate JWKS
async function jwks() {
    try {
        // CREATE JWK
        const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
            namedCurve: 'prime256v1',
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });

        const cryptoKey = await jose.JWK.asKey(privateKey, 'pem');
        const publicKeyJSON = cryptoKey.toJSON();

        const jwksEndpoint = {
            keys: [{
                ...publicKeyJSON,
                use: "sig",
                crv: "P-256",
                alg: "ES256",
            }],
        };

        return jwksEndpoint;
    } catch (err) {
        console.error("Error generating JWKS:", err);
        throw err;
    }
}

const lambdaHandler = async (event, context) => {
    try {
        // Generate the JWKS
        const jwksEndpoint = await jwks();

        // Return the JWKS in the response
        const response = {
            'statusCode': 200,
            'body': JSON.stringify(jwksEndpoint),
        };

        console.log(response)
        return response;
    } catch (err) {
        console.error("Lambda Error:", err);

        const errorResponse = {
            'statusCode': 500,
            'body': JSON.stringify({
                message: 'An error occurred',
            }),
        };
        return errorResponse;
    }
};

exports.lambdaHandler = lambdaHandler;