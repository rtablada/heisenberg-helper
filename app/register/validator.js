import {
  validatePresence,
  validateFormat,
  validateLength
} from 'ember-changeset-validations/validators';


export default {
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' }),
  ],
  password: [
    validatePresence(true),
    validateLength({ min: 6 })
  ],


};
