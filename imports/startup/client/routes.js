import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout/layout.js';

import '../../ui/pages/home.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('layout', { main: 'home' });
  }
});
