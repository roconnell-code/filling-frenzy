# Exact Fill

A gas-station game, and a short site about how a stop works.

Open the promo at `/`, or go straight to the pumps at `/play`. The game itself is still one file, [`play.html`](play.html). Copy that file and it runs in a browser on its own.

## Play

Hold the spacebar, or press and hold the red pump. The sale runs up at a steady speed. Let go to lock it.

- **Exact.** You stay. The next price is higher, and that sale stays in the till.
- **Over.** Even by a cent, you lose all the money.
- **Under.** You leave with the gas. The receipt shows the gallons and how many miles they will carry.

The car does 28 miles per gallon. Miles are `dollars ÷ local price per gallon × 28`.

When you leave, the next station is about that many miles down the road. A short tank only moves you to another corner in the same city. A longer one reaches the farthest real city you can get to. The sign at the top changes to that city's regular price.

If the browser can see your location, the first station is the nearest city in the list. Otherwise you start in Los Angeles.

## Prices

US regular prices are AAA Fuel Gauge averages for the metro or state, dated 30 Sep 2026. Prices outside the US come from [OpenVan.camp](https://openvan.camp) (CC BY 4.0) and are refreshed when the game loads. Those are shown in the local currency per liter, with the dollar-per-gallon equivalent used for the miles.

## Run it

```bash
npm install
npm run dev
```

Open http://127.0.0.1:47291 for the promo, or http://127.0.0.1:47291/play for the game.

Screenshots on the promo page live in `public/shots/`.
