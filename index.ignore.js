const axios = require("axios");
const uniqid = require("uniqid");
const rateLimit = require("axios-rate-limit");
const crypto = require("crypto");

// const userAgent = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9";
// let baseCookie = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;";
// let ssoCookie;
// let loggedIn = false;
// let debug = 0;

let apiAxios = axios.create();

let loginAxios = apiAxios;
// let defaultBaseURL = "https://my.callofduty.com/api/papi-client/";
// let loginURL = "https://profile.callofduty.com/cod/mapp/";
// let defaultProfileURL = "https://profile.callofduty.com/";

module.exports = function (config = {}) {
  module.module.BO4friends = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for BO4. Try `battle` instead.",
        );
      if (platform === "battle")
        reject("Battlenet does not support Friends.");
      let urlInput = _helpers.buildUri(
        `leaderboards/v2/title/bo4/platform/${platform}/time/alltime/type/core/mode/career/gamer/${gamertag}/friends`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.BO4leaderboard = function (
    page,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for BO4. Try `battle` instead.",
        );
      let urlInput = _helpers.buildUri(
        `leaderboards/v2/title/bo4/platform/${platform}/time/alltime/type/core/mode/career/page/${page}`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWleaderboard = function (
    page,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      let urlInput = _helpers.buildUri(
        `leaderboards/v2/title/mw/platform/${platform}/time/alltime/type/core/mode/career/page/${page}`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWBattleData = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      brDetails = {};
      this.MWwz(gamertag, platform)
        .then(data => {
          let lifetime = data.lifetime;
          if (typeof lifetime !== "undefined") {
            let filtered = Object.keys(lifetime.mode)
              .filter(x => x.startsWith("br"))
              .reduce((obj, key) => {
                obj[key] = lifetime.mode[key];
                return obj;
              }, {});
            if (typeof filtered.br !== "undefined") {
              filtered.br.properties.title = "br";
              brDetails.br = filtered.br.properties;
            }
            if (typeof filtered.br_dmz !== "undefined") {
              filtered.br_dmz.properties.title = "br_dmz";
              brDetails.br_dmz = filtered.br_dmz.properties;
            }
            if (typeof filtered.br_all !== "undefined") {
              filtered.br_all.properties.title = "br_all";
              brDetails.br_all = filtered.br_all.properties;
            }
          }
          resolve(brDetails);
        })
        .catch(e => reject(e));
    });
  };

  module.MWfriends = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      if (platform === "battle")
        reject(
          "Battlenet friends are not supported. Try a different platform.",
        );
      if (platform === "uno")
        gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/friends/type/mp`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWWzfriends = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      if (platform === "battle")
        reject(
          "Battlenet friends are not supported. Try a different platform.",
        );
      if (platform === "uno")
        gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/friends/type/wz`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWstats = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/mp`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWwzstats = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/wz`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWweeklystats = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      weeklyStats = {};
      this.MWstats(gamertag, platform)
        .then(data => {
          if (typeof data.weekly !== "undefined")
            weeklyStats.mp = data.weekly;
          this.MWwzstats(gamertag, platform)
            .then(data => {
              if (typeof data.weekly !== "undefined")
                weeklyStats.wz = data.weekly;
              resolve(weeklyStats);
            })
            .catch(e => reject(e));
        })
        .catch(e => reject(e));
    });
  };

  module.MWloot = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `loot/title/mw/platform/${platform}/${lookupType}/${gamertag}/status/en`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWAnalysis = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "steam")
        reject(
          "Steam Doesn't exist for MW. Try `battle` instead.",
        );
      gamertag = _helpers.cleanClientName(gamertag);
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `ce/v2/title/mw/platform/${platform}/gametype/all/gamer/${gamertag}/summary/match_analysis/contentType/full/end/0/matchAnalysis/mobile/en`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.MWMapList = function (platform = config.platform) {
    return new Promise((resolve, reject) => {
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `ce/v1/title/mw/platform/${platform}/gameType/mp/communityMapData/availability`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.friendFeed = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      gamertag = _helpers.cleanClientName(gamertag);
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `userfeed/v1/friendFeed/platform/${platform}/gamer/${gamertag}/friendFeedEvents/en`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getEventFeed = function () {
    return new Promise((resolve, reject) => {
      let urlInput = _helpers.buildUri(
        `userfeed/v1/friendFeed/rendered/en/${ssoCookie}`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getLoggedInIdentities = function () {
    return new Promise((resolve, reject) => {
      let urlInput = _helpers.buildUri(
        `crm/cod/v2/identities/${ssoCookie}`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getLoggedInUserInfo = function () {
    return new Promise((resolve, reject) => {
      let urlInput = _helpers.buildProfileUri(
        `cod/userInfo/${ssoCookie}`,
      );
      _helpers
        .sendRequestUserInfoOnly(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.FuzzySearch = function (
    query,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (
        platform === "battle" ||
        platform == "uno" ||
        platform == "all"
      )
        query = _helpers.cleanClientName(query);
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `crm/cod/v2/platform/${platform}/username/${query}/search`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getBattlePassInfo = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (
        platform === "battle" ||
        platform == "uno" ||
        platform === "acti"
      )
        gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `loot/title/mw/platform/${platform}/${lookupType}/${gamertag}/status/en`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getCodPoints = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      gamertag = _helpers.cleanClientName(gamertag);
      let urlInput = _helpers.buildUri(
        `inventory/v1/title/mw/platform/${platform}/gamer/${gamertag}/currency`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getBattlePassLoot = function (
    season,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `loot/title/mw/platform/${platform}/list/loot_season_${season}/en`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getPurchasable = function (
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `inventory/v1/title/mw/platform/${platform}/purchasable`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.purchaseItem = function (
    gamertag,
    item = "battle_pass_upgrade_bundle_4",
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      gamertag = _helpers.cleanClientName(gamertag);
      let urlInput = _helpers.buildUri(
        `inventory/v1/title/mw/platform/${platform}/gamer/${gamertag}/item/${item}/purchaseWith/CODPoints`,
      );
      _helpers
        .sendPostRequest(urlInput, {})
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.getGiftableFriends = function (
    unoId,
    itemSku = "432000",
  ) {
    return new Promise((resolve, reject) => {
      let urlInput = _helpers.buildUri(
        `gifting/v1/title/mw/platform/uno/${unoId}/sku/${itemSku}/giftableFriends`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.sendGift = function (
    gamertag,
    recipientUnoId,
    senderUnoId,
    itemSku = "432000",
    sendingPlatform = config.platform,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      let data = {
        recipientUnoId: recipientUnoId,
        senderUnoId: senderUnoId,
        sendingPlatform: sendingPlatform,
        sku: Number(itemSku),
      };
      gamertag = _helpers.cleanClientName(gamertag);
      let urlInput = _helpers.buildUri(
        `gifting/v1/title/mw/platform/${platform}/gamer/${gamertag}`,
      );
      _helpers
        .sendPostRequest(urlInput, data)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.ConnectedAccounts = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      gamertag = _helpers.cleanClientName(gamertag);
      let lookupType = "gamer";
      if (platform === "uno") lookupType = "id";
      if (platform === "uno" || platform === "acti")
        platform = this.platforms["uno"];
      let urlInput = _helpers.buildUri(
        `crm/cod/v2/accounts/platform/${platform}/${lookupType}/${gamertag}`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.Presence = function (
    gamertag,
    platform = config.platform,
  ) {
    return new Promise((resolve, reject) => {
      gamertag = _helpers.cleanClientName(gamertag);
      let urlInput = _helpers.buildUri(
        `crm/cod/v2/friends/platform/${platform}/gamer/${gamertag}/presence/1/${ssoCookie}`,
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.Community = function () {
    return new Promise((resolve, reject) => {
      let urlInput = _helpers.buildUri(
        "crm/cod/v2/title/wwii/community",
      );
      _helpers
        .sendRequest(urlInput)
        .then(data => resolve(data))
        .catch(e => reject(e));
    });
  };

  module.apiAxios = apiAxios;

  return module;
};
