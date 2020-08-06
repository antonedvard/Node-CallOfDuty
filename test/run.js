const CodAPI = require("../dist");
require("dotenv").config();

async function start() {
  const epic = new CodAPI({
    platform: "psn",
    platformUser: process.env.COD_PLATFORM_USER,
    email: process.env.COD_LOGIN,
    password: process.env.COD_PASS,
    activisionId: process.env.ACTIVISION_ID,
  });

  let res = await epic.login();
  // const wzData = await epic.MW.warzone.combat(
  //   process.env.gtv_four,
  //   process.env.gtv_four_platform,
  // );

  // console.log(wzData.matches[0]);

  console.log(epic.currentSeason);

  // epic.IW.test();
  // epic.WWII.test();
  // epic.BO3.test();
  // epic.BO4.test();
  // epic.MW.warzone.test();

  // console.log(await epic.me.info());

  // const mpData = await epic.MWcombatmp();
  // console.log(mpData);

  // console.log(wzData);
}

start();
