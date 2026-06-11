# Brand tiles / logos

Drop brand artwork in this folder, then set `image` (preferred, for the
photo+logo tiles) or `logo` (transparent logo) on the matching brand in
`src/lib/constants.ts`. The grid falls back to a clean wordmark when neither
is set, so the site never breaks while files are missing.

## Expected filenames

Use these exact names so the brand entries can be switched on with no guesswork.
`.jpg` for photographic tiles, `.png`/`.svg` for transparent logos.

| Brand              | File                          | Field   | Notes                                   |
| ------------------ | ----------------------------- | ------- | --------------------------------------- |
| Inpeddo            | `inpeddo.jpg`                 | `image` | Deck tile with the round INPEDDO mark   |
| Lousy Livin        | `lousy-livin.jpg`             | `image` | Grip-tape tile ("by Inpeddo")           |
| Bronx Wheels       | `bronx.jpg`                   | `image` | Wheels tile with the bronx mark         |
| Blast Skates       | `blast-skates.jpg`            | `image` | Yellow logo tile                        |
| Über               | `uber.jpg`                    | `image` | (confirm: is the blue action shot Über?)|
| Poetic Collective  | `poetic-collective.jpg`       | `image` |                                         |
| Haze Wheels        | `haze-wheels.jpg`             | `image` |                                         |
| Flytech            | `flytech.jpg`                 | `image` |                                         |
| Bolzen Trucks      | `bolzen-trucks.jpg`           | `image` |                                         |
| Tremendous Trucks  | `tremendous-trucks.jpg`       | `image` |                                         |
| Skip Skateboards   | `skip-skateboards.jpg`        | `image` |                                         |
| BroTection         | `brotection.jpg`              | `image` |                                         |
| Loomi Boards       | `loomi-boards.jpg`            | `image` |                                         |
| Yamato Living Ramps| `yamato-living-ramps.jpg`     | `image` |                                         |

Tiles render at a 16:10 ratio (`object-cover`), so landscape artwork around
800×500 px works best.
