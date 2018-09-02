class SpokeConfig {
  constructor(spokeConfig) {
    var platforms = [];
    spokeConfig.platforms.forEach(platform => {
      module = require(("./" + platform.module)("test"));
      platforms.push({
        module: module,
        endpoint: platform.endpoint,
        groups: platform.groups,
        about: platform.about,
        triVersion: platform.triVersion,
        connection: platform.connection
      });
    });
    this.platforms = platforms;
  }
}

module.exports = SpokeConfig;
