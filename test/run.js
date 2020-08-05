const CodAPI = require("../dist");
require("dotenv").config();

// console.dir(CodAPI);

async function start() {
  const epic = new CodAPI({
    platform: "psn",
    platformUser: process.env.COD_PLATFORM_USER,
    email: process.env.COD_LOGIN,
    password: process.env.COD_PASS,
  });

  let res = await epic.login();
  console.log(res);

  const wzData = await epic.MWcombatwz();

  // const mpData = await epic.MWcombatmp();
  // console.log(mpData);

  console.log(wzData);
}

start();
