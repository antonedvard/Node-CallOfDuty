# Call of Duty API - v1.3.0

# ACT-COD-API

This is a fork and an almost complete rewrite of **[Lierrmm's/Node-CallOfDuty](https://github.com/Lierrmm/Node-CallOfDuty)** API.

The reason for the name-change and the complete change of everything is because of the\
amount of code changes relative to the original one (so people don't get confused).

This is written in TypeScript in a classbased manor with each game in its own interface.\
Please feel free to throw in pull requests, this not by any means written in a "correct" way\
where this is the first time i convert something from JS to TS.

Please show **[Lierrmm](https://github.com/Lierrmm)** all the love you have for the API.

### Quick start

```js
import CODAPI from "{PATH TO THE DIST FOLDER}";

// ns = CODAPI.CODAPICONFIG
const CONFIG = {
    platform?: OneOfPlatforms; // Your Platform "psn" | "xbl" | "battle" | "uno"(activison)
    platformUser?: string; // Your platform username
    email: string; // Your activision user email
    password: string; // Your activision user password
    activisionId: string; // Your activision(uno) platform user.
    ratelimit?: RATELIMITCONFIG; // Ratelimiting
    debug?: boolean; // Debug flag
};

const cod = new CODAPI(CONFIG);

async function start() {
    // Start by logging in!
    await cod.login();

    /**
     * Gives you out your stats if the `platform` and `platformUser`
     * is provided in config if not provided in config you should
     * input the arguments to `.stats(platformUser, platform)`
     */
    const data = await cod.MW.warzone.stats();
    console.log(data);
};

start();
```

## Documentation

Currently working on getting those in a decent state and published to gh-pages.

### Todo

There are couple of things that needed to be done.

- Decent testing (I have only been testing this on the run manually)
- Some functions are buggy/broken.
- Check if there are more endpoints available.
- Try to add "Loadouts" endpoints when Activision releases their loadouts in the Companion app.
- Get more ideas to extend the API.
