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
    platform?: OneOfPlatforms;
    platformUser?: string;
    email: string;
    password: string;
    activisionId: string;
    ratelimit?: RATELIMITCONFIG;
    debug?: boolean;
}

const cod = new CODAPI(CONFIG);

/**
 * Gives you out your stats if the `platform` and `platformUser` is provided in config
 * if not provided in config you should input the arguments to
 * `.stats(platformUser, platform)`
 */
cod.MW.warzone.stats().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
```
