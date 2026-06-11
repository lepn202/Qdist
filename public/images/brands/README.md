# Brand tiles / logos

Drop brand artwork in this folder, then set `image` (preferred — the
photo+logo tiles) or `logo` (transparent logo) on the matching brand in
`src/lib/constants.ts`. The grid falls back to a clean wordmark when neither
is set, so the site never breaks while files are missing.

## Expected filenames

Use these exact names so each brand entry can be switched on with no guesswork.
`.jpg` for the photographic tiles (most of what's been provided), `.png`/`.svg`
for transparent logos. Tiles render at a 16:10 ratio (`object-cover`), so
landscape artwork around 800×500 px works best.

| Brand               | File                       | Status / notes                              |
| ------------------- | -------------------------- | ------------------------------------------- |
| Inpeddo             | `inpeddo.jpg`              | provided                                    |
| Über                | `uber.jpg`                 | provided (white script on holographic deck) |
| Superply            | `superply.jpg`             | provided (SP logo) — confirm link URL       |
| Blast Skates        | `blast-skates.jpg`         | provided (yellow logo)                       |
| Poetic Collective   | `poetic-collective.jpg`    | provided (blue action shot)                  |
| Lousy Livin         | `lousy-livin.jpg`          | provided (grip tile, "by Inpeddo")           |
| Loomi Boards        | `loomi-boards.jpg`         | provided (Little Lemon Loomi)                |
| Skip Skateboards    | `skip-skateboards.jpg`     | not yet provided                             |
| Flytech             | `flytech.jpg`              | not yet provided                             |
| Bronx Wheels        | `bronx.jpg`                | provided                                     |
| Haze Wheels         | `haze-wheels.jpg`          | provided                                     |
| Bolzen Trucks       | `bolzen.jpg`               | provided                                     |
| Tremendous Trucks   | `tremendous-trucks.jpg`    | provided (TRMDS silver truck)                |
| Flux Trucks         | `flux-trucks.jpg`          | provided — confirm link URL                  |
| Pulsar Bearings     | `pulsar-bearings.jpg`      | provided                                     |
| Zupply              | `zupply.jpg`               | provided (Hard Goods)                        |
| BroTection          | `brotection.jpg`           | provided                                     |
| Jessup              | `jessup.jpg`               | provided                                     |
| Curfboard           | `curfboard.jpg`            | provided                                     |
| Yamato Living Ramps | `yamato-living-ramps.jpg`  | provided (concrete skatepark)                |
| Skateistan          | `skateistan.jpg`           | provided (non-profit partner)                |

### Still unidentified
One tile (batch 3) — a griptape deck shot on a **beach / aerial** background —
has no readable logo and isn't matched to a brand yet. Confirm which brand it
belongs to and it'll get a row here too.
