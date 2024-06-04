const RoutesVersions = require('./routes-constants'); // Assuming the path is correct
const RoutingVersion = require('./v1'); // Destructure to get the versionOne function

// No need for the AppRoutes class in this case

function initAppRoutes(router) { // Simplified function
  return RoutingVersion(router);
}

module.exports = initAppRoutes;