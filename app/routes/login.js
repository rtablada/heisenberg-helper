import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: '1',
      firstName: 'Pad',
      lastName: 'Thai'
    }]
  }
});