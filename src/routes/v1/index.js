const userRoutes = require('../../modules/user/route'); // Assuming the path is correct
const tipRoutes = require('../../modules/tip/route')
// No need for the RoutingVersion class in this case

function versionOne(router) {
  userRoutes(router);
  tipRoutes(router);
  return router;
}

module.exports = versionOne;