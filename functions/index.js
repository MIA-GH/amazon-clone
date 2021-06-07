/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51I8yM3GpB8PnYWfNhBuq5YPXggNj2c5Kb0mdbhwaEnNdrNxJ7RIYc9Vfigu3KPyLig3DGyHv1PSJrjiOiq4GeTnI00ThxywcPS");

// -- api

// -- app config
const app = express();

// -- middle wares
app.use(cors({ origin: true }));
app.use(express.json());

// -- api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received BOOM!!! fro this amount ', total);
    const paymentItent = await stripe.paymentItents.create({
        amount: total, // in sub units
        currency: "usd", // currency in use
    });
    response.status(201).send({
        clientSecret: paymentItent.client_secret,
    })
});
// -- listen command
exports.api = functions.https.onRequest(app);
