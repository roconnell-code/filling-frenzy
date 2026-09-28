# Exact Fill

A one-page gas pump game. Hold the spacebar and stop the sale on the exact price.

The whole game lives in [`index.html`](index.html). Copy that file anywhere and open it in a browser. Nothing else is required.

## Play

- **Hold space** (or press and hold the pump) to run the sale up.
- **Exact** — you stay. The next price is higher, and that sale stays in the till.
- **Over** — even by a cent, you lose all the money.
- **Under** — you leave with the gas. The receipt shows the gallons and how many miles they are.

Regular is $3.50 a gallon. The car gets 28 miles per gallon, so every dollar in the tank is eight miles.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:47291
