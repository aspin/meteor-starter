import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Schema } from '../schema.js';

class ThingsCollection extends Mongo.Collection {
  insert(thing, callback) {
    super.insert(thing, callback);
  }
}

export const Things = new ThingsCollection('things');

Schema.Thing = new SimpleSchema({
  foo: {
    type: String,
    label: 'bar'
  }
});

Things.attachSchema(Schema.Thing);
