import { Meteor } from 'meteor/meteor';

import { Things } from '../../api/things/things.js';

Meteor.startup(() => {
  if (Meteor.isProduction) {
    return;
  }

  Things.insert({
    foo: 'bar'
  });

});
