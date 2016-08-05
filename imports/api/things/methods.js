import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const doThing = new ValidatedMethod({
  name: 'things.do',
  validate: new SimpleSchema({
    foo: {
      type: String
    }
  }).validator(),
  run({ foo }) {
    console.log(foo);
  }
});
