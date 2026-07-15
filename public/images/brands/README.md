# Brand tiles / logos

Every brand in `src/lib/constants.ts` is **already pre-wired** to an `image`
path below. Just drop a correctly-named file into this folder and that brand's
cell upgrades from a wordmark to its full photo tile automatically — no code
change needed. Until a file is present, the grid renders a clean wordmark
(the cell detects the missing image and falls back), so the site never shows a
broken image.

Filenames must match **exactly** (lowercase, hyphenated, `.jpg`).

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
| Skip Skateboards    | `skip-skateboards.jpg`     | provided (SKIP bubble logo)                  |
| Bronx Wheels        | `bronx.jpg`                | provided                                     |
| Haze Wheels         | `haze-wheels.jpg`          | provided                                     |
| Bolzen Trucks       | `bolzen.jpg`               | provided                                     |
| Tremendous Trucks   | `tremendous-trucks.jpg`    | provided (TRMDS silver truck)                |
| Flux Trucks         | `flux-trucks.jpg`          | provided — confirm link URL                  |
| Pulsar Bearings     | `pulsar-bearings.jpg`      | provided                                     |
| Zupply              | `zupply.jpg`               | provided (Hard Goods)                        |
| BroTection          | `brotection.jpg`           | provided                                     |
| Jessup              | `jessup.jpg`               | provided                                     |
| Ultimate Boards     | `ultimate-boards.jpg`      | provided (grip tile, beach/aerial shot)      |
| Curfboard           | `curfboard.jpg`            | provided                                     |
| Yamato Living Ramps | `yamato-living-ramps.jpg`  | provided (concrete skatepark)                |
| Skateistan          | `skateistan.jpg`           | provided (non-profit partner)                |
