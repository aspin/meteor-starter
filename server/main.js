import '/imports/startup/server';

if (Meteor.isDevelopment) {
  Things = require('../imports/api/things/things.js').Things;
}
