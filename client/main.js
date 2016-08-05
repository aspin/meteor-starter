import '/imports/startup/client';

if (Meteor.isDevelopment) {
  Things = require('/imports/api/things/things.js').Things;
}
