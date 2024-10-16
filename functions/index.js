const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Q9oJGRqxwzhN6aW9KbTU4UAnOua8TYRbRROu7CykBpTt2uIntN5zh03Smim07DdGCAik37JHyNJ5ku9KDvWx1iH00X1RozXYX");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: '*'}));
app.use(express.json());

// API Routes 
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  console.log("Request body: ", req.body);
    const total = req.query.total;  // Get the total amount in cents
    console.log("Payment request received for this amount >>> ", total);
    
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // Total amount in smallest currency unit (cents for USD)
        currency: "usd",
      });
  
      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      }); 
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).send({ error: "Payment intent creation failed." });
    }
  });
  

// Listen command  
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-2676d/us-central1/api
