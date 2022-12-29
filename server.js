// sk_test_51MKSAFCzfp9YZaTY5UluohQGnKdywkIPkoEV25Ww5lfPJvEsjMLsCifm5Lo1Tip6wMuT74p4Pdm78bfyJTloYfmd002yeDMoTb;
// Coffee: price_1MKSGeCzfp9YZaTYzvj3y2M4
// Creamer: price_1MKSHECzfp9YZaTYuMuBcLgz
// Sugar: price_1MKSHdCzfp9YZaTYahgo2E6z

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51MKSAFCzfp9YZaTY5UluohQGnKdywkIPkoEV25Ww5lfPJvEsjMLsCifm5Lo1Tip6wMuT74p4Pdm78bfyJTloYfmd002yeDMoTb'
);

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
  // req.body.items
  // {{
  //     id:
  //     quantity:
  // }}
  // stripe wants
  // {{
  //     price:
  //     quantity:
  // }}
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  //   formate line items for Stripe
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  // send session url
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log('Listening on port 4000!'));
